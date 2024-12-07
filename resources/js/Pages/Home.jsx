import React, { useEffect } from 'react';
import Layout from '../Layouts/Layout';
import { Link } from '@inertiajs/react';
import {useRoute} from '../../../vendor/tightenco/ziggy';

export default function Home({ posts }) {
    const route = useRoute();

    return (
            <div>
                <h1 className="title">Posts</h1>
                <div>
                    {posts.data.map(post => (
                        <div key={post.id} className='p-4 border-b'>
                            <div className='test-sm text-slate-600'>
                                <span>Posted on:</span>
                                <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                            </div>
                            <p className='font-medium'>{post.body}</p>

                            {/* <Link href={`/posts/${post}`} className="text-link">Read more...</Link> */}
                            <Link href={route('posts.show', post)} className="text-link">Read more...</Link>
                        </div>
                    ))}
                </div>
                <div className="py-12 px-4">
                    {posts.links.map((link) =>
                        link.url ? (
                            <Link
                                key={link.label} // 'key' should be here
                                href={link.url}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={`p-1 mx-1 ${link.active ? 'text-blue-500 font-bold' : ''}`}
                            />
                        ) : (
                            <span
                                key={link.label} // 'key' should be here
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className="p-1 mx-1 text-slate-300"
                            />
                        )
                    )}
                </div>
            </div>
    );
}
