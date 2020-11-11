import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase';

// Query all data from the firestore

const useContent = (media) => {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(media)
      .get()
      .then((querySnapshot) => {
        const allContent = querySnapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [firebase, media]);
  return { [media]: content };
};

export default useContent;
