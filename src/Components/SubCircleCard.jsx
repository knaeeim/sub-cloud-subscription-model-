import React from 'react';

const SubCircleCard = ({blog}) => {
    const { title, image, summary, tagline, category } = blog;
    return (
        <div className='py-10'>
            <div className="w-11/12 px-6 py-16 mx-auto space-y-12 border-2 border-dashed rounded-2xl">
                <article className="space-y-8">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
                            {title}
                        </h1>
                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                            <div className="flex items-center md:space-x-2">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                                />
                                <p className="text-sm">
                                    Khairul Bashar Naeeim • May 3rd, 2025
                                </p>
                            </div>
                            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                                4 min read • 1,570 views
                            </p>
                        </div>
                    </div>
                    <div className="dark:text-gray-800">
                        <p>{summary}</p>
                    </div>
                </article>
                <div>
                    <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">
                            #{tagline}
                        </a>
                        <button className="btn btn-sm font-semibold btn-outline">{category}</button>
                    </div>
                    <div className="space-y-2">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCircleCard;