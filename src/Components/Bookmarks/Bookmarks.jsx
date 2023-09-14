import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='w-1/3'>
            <div className='px-8 py-5 border-[#6047EC] bg-[#6047ec1a] border-2 rounded-lg mb-5 text-center'>
                <h3 className='text-[#6047EC] text-2xl font-bold'>Spent time on read : {readingTime} min</h3>
            </div>
            <div className='bg-[#1111110d] px-7 py-9 rounded-lg'>
                <h2 className="text-2xl font-bold">Bookmarked Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>

        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;