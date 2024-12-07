export default function Show({post}){
    console.log('show entered')
    return (
        <div>
            <div key={post.id} className='p-4 border-b'>
                            <div className='test-sm text-slate-600'>
                                <span>Posted on:</span>
                                <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                            </div>
                            <p className='font-medium'>{post.body}</p>
                        </div>
        </div>
    );
}