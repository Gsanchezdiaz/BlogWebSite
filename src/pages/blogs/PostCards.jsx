import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBlogs } from '../../redux/features/blogs/blogsSlice';
import Card from './Card';

const PostCards = () => {
    const dispatch = useDispatch();
    const { blogs, isLoading, isError, error } = useSelector((state) => state.blogs);
    
    // paginacion del blog
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 5;
    const startIndex = (currentPage -1) * blogsPerPage;
    const endIndex = currentPage * blogsPerPage;
    const paginatedBlogs = blogs.slice(startIndex, endIndex);

    // Hacemos el llamado a los datos del blog
    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    // Funcion de cambio de pagina
    const handlePageChange = (nextPage) => {
        setCurrentPage(nextPage)
    }

    console.log(blogs)

    return (
        <div className="w-full lg:w-2/3">
            {
                !isError && !isLoading && paginatedBlogs.length > 0 ? (<div>
                    {
                        paginatedBlogs.map((blog, index) => (<Card blog={blog} key={index} />))
                    }
                </div>) :
                    (
                        <div className="rounded w-full lg:flex mb-10">
                            <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")' }} title="deit is very important">
                            </div>
                            <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                                <div>
                                    <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                                        Suspendisse varius justo eu risus laoreet fermentum non aliquam dolor
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        Mauris porttitor, velit at tempus vulputate, odio turpis facilisis dui, vitae eleifend odio ipsum at odio. Phasellus luctus scelerisque felis eget suscipit.
                                    </p>
                                </div>
                                <div className="flex mt-3">
                                    <img src="https://randomuser.me/api/portraits/women/54.jpg"
                                        className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
                                    <div>
                                        <p className="font-semibold text-gray-700 text-sm capitalize"> Serenity Hughes </p>
                                        <p className="text-gray-600 text-xs"> 14 Aug </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
            {/* Botones de Paginacion */}
            <div className='mb-8 px-8 flex justify-around mt-8'>
                        <button 
                            className='px-2 bg-red-500 text-white rounded cursor-pointer' 
                            onClick={() => (handlePageChange(currentPage - 1))}
                            disabled={currentPage === 1}>
                                Previous
                        </button>
                        <span>{currentPage}</span>
                        <button 
                            className='px-2 bg-blue-500 text-white rounded cursor-pointer'
                            onClick={() => (handlePageChange(currentPage + 1))}
                            disabled={currentPage === blogs.length / blogsPerPage}>
                                Next
                        </button>
                    </div>
        </div>
    )
}

export default PostCards