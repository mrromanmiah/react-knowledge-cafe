import PropTypes from 'prop-types';
import { BsBookmark } from 'react-icons/bs';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-16'>
            <img className='w-full rounded-lg' src={cover} alt={`Cover Picture ${title}`} />
            <div className='flex justify-between items-center mt-6'>
                <div className='flex items-center gap-4'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl font-bold'>{author}</h3>
                        <p className='text-base font-semibold text-[#11111199]'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-sm font-medium text-[#11111199]'>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='text-[#11111199]'><BsBookmark></BsBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold my-5">{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, index) => <span className='text-xl font-medium text-[#11111199]' key={index}><a href=""> #{hashtag}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='text-[#6047EC] text-xl font-semibold underline mt-5 hover:text-[#6047ecbd]'>Mark As Read</button>

        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;