import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore';
import { db } from '@/firebase.config';
import { toast } from 'react-toastify';
import Spinner from '@/components/Spinner';
import ListingItem from '@/components/ListingItem';

const Offers = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // GET A REFERENCE
        const listingsRef = collection(db, 'listings');

        // CREATE A QUERY
        const q = query(
          listingsRef,
          where('offer', '==', true),
          orderBy('timestamp', 'desc'),
          limit(10)
        );

        // EXECUTE-QUERY
        const querySnap = await getDocs(q);

        const listings = [];

        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setListings(listings);
        setLoading(false);
      } catch (error) {
        toast.error('Could not fetch listings');
      }
    };

    fetchListings();
  }, []);

  return (
    <div className='category'>
      <header>
        <h3 className='pageHeader'>Offers</h3>
      </header>

      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className='categoryListings'>
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </main>
        </>
      ) : (
        <p className='nolisting'>There are no current offers!</p>
      )}
    </div>
  );
};

export default Offers;
