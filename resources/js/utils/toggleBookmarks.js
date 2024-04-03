const toggleBookmarks = async (propertyId, bookmarks, setBookmarks) => {
  try {
      // Check if the property is already bookmarked
      const isBookmarked = bookmarks.some(bookmark => bookmark.property_id === propertyId);
      
      // If the property is bookmarked, remove it from bookmarks
      if (isBookmarked) {
          const bookmarkToRemove = bookmarks.find(bookmark => bookmark.property_id === propertyId);
          await fetch(`/api/bookmarks/${bookmarkToRemove.id}`, {
              method: 'DELETE',
          });
          setBookmarks(prevBookmarks => prevBookmarks.filter(bookmark => bookmark.id !== bookmarkToRemove.id));
          console.log('Property removed from bookmarks');
      } else {
          // If the property is not bookmarked, add it to bookmarks
          const response = await fetch('/api/bookmarks', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ property_id: propertyId }),
          });
          if (!response.ok) {
              throw new Error('Failed to add property to bookmarks');
          }
          const newBookmark = await response.json();
          setBookmarks(prevBookmarks => [...prevBookmarks, newBookmark]);
          console.log('Property added to bookmarks');
      }
  } catch (error) {
      console.error('Error toggling property bookmark status:', error);
  }
};

export default toggleBookmarks;