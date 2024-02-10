import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RelatedBlogCard from './RelatedBlogCard';
import { fetchRelatedBlogs } from '../../redux/features/relatedBlogs/relatedBlogsSlice';
import { current } from '@reduxjs/toolkit';



function PopularBlogs({ tags, currentBlogId }) {
    const dispatch = useDispatch();
    const { relatedBlogs } = useSelector((state) => state.relatedBlogs);

    useEffect(() => {
        dispatch(fetchRelatedBlogs({ tags, id: currentBlogId }));
    }, [dispatch, tags, currentBlogId]);

    console.log("relatedBlogs:  ", relatedBlogs);

    return (
        <section className="text-gray-600 mt-12">
            <h2 className="text-3xl font-bold">Popular Blogs</h2>
            <div className="container px-5 py-8 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {relatedBlogs.slice(0, 3).map((blog) => <RelatedBlogCard key={currentBlogId} blog={blog} />)}
                </div>
            </div>
        </section>
    )
}

export default PopularBlogs