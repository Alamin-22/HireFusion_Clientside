import moment from 'moment';

const Blogs = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-10 justify-center m-4 my-10">
                {/* blog 1 */}
                <div className="max-w-2xl px-8 mx-auto py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-light text-gray-600 dark:text-gray-400">{moment().startOf('hour').fromNow()} </span>
                        <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-primary rounded cursor-pointer hover:bg-[#7ad8cd]" tabIndex="0" role="button">New</a>
                    </div>

                    <div className="mt-2">
                        <p className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline cursor-pointer" tabIndex="0" role="link"> What is an access token and refresh token?</p>
                        <p className="text-gray-600 dark:text-gray-300 font-bold">Access Token:</p>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">Think of an access token as a temporary key. It is like a ticket to access a specific website, app, or service. This key is given to you when you log in or grant permission. However, it is not a permanent key; it has an expiration date. Once that date passes, the key is no longer valid.</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-gray-600 dark:text-gray-300 font-bold">Refresh Token:</p>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">A refresh token is a long-lived secret that is securely stored on the client-side. It is not meant to access resources directly but serves as a key to get new access tokens when they expire. When the access token expires, the client can use the refresh token to request a new access token without requiring the user to log in again.</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer hover:underline" tabIndex="0" role="link">How do they work and where should we store them on the client-side?</p>
                        <span className="font-bold">Access Token:</span> When a user logs in to a service or grants an application permission, they receive an access token. This access token is a proof of their authentication and authorization to access specific resources or perform certain actions. It typically has a short lifespan (e.g., 15 minutes) to minimize the risk if it's compromised. <br />

                        <span className="font-bold">Refresh Token:</span> A refresh token is a long-lived secret that is securely stored on the client-side. It's not meant to access resources directly but serves as a key to get new access tokens when they expire. When the access token expires, the client can use the refresh token to request a new access token without requiring the user to log in again.  <br /> <br />

                        <span className="font-bold">Where to Store Them on the Client-Side?</span>
                        <span className="font-medium">Token should be stored securely, typically in one of these ways:</span>
                        <ol className="list-disc ml-5">
                            <li><b>HttpOnly cookies:</b> Just like access tokens, you can store refresh tokens as HttpOnly cookies, which are more secure against certain types of attacks.
                            </li>
                            <li>
                                <b>Secure server-side storage:</b> For maximum security, refresh tokens can be stored securely on the server, and the client makes requests to obtain new access tokens using the refresh token. This is a common approach for mobile and single-page applications.
                            </li>
                        </ol>


                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <div className="flex items-center">
                            <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar" />
                            <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabIndex="0" role="link">Khatab wedaa</a>
                        </div>
                    </div>
                </div>
                {/* blog 2 */}
                <div className="max-w-2xl mx-auto px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                            {moment().startOf('hour').fromNow()}</span>
                        <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-primary rounded cursor-pointer hover:bg-[#7ad8cd]" tabIndex="0" role="button">New</a>
                    </div>

                    <div className="mt-2">
                        <p className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline cursor-pointer" tabIndex="0" role="link">  What is express js?</p>
                        <p className="mt-2 text-gray-600 dark:text-gray-300"> Express.js is a web application framework for Node.js, and it simplifies the process of building web applications by providing a set of pre-built features and functions. Here are some key details:</p>
                    </div>

                    <div className="mt-2">
                        <p className="text-gray-600 dark:text-gray-300 font-bold">Routing:</p>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">Express.js allows you to define routes that specify how your web application should respond to different types of requests (e.g., GET, POST). For example, you can set up routes to handle requests like accessing a web page, submitting a form, or fetching data from a server.</p>

                        <span className="font-bold">Middleware:</span> Middleware functions are at the core of Express.js. These functions can be used to perform tasks like authentication, data validation, logging, and more. You can chain multiple middleware functions together to process requests in a specific order.   <br />

                        <span className="font-bold">Server Setup:</span>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">With Express.js, you can easily set up a web server to listen for incoming HTTP requests. It abstracts away many of the low-level details of working with the HTTP protocol, making it simpler to handle requests and responses.</p>

                        <span className="font-bold">Database Integration:</span>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">Express.js does not dictate which database you should use, but it integrates well with databases such as MongoDB, PostgreSQL, MySQL, and more. You can use database libraries or Object-Relational Mapping (ORM) tools with Express to interact with your data.</p> <br />
                        <span className="font-bold">Middleware Ecosystem:</span>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">There is a vast ecosystem of third-party middleware that extends the functionality of Express.js. These middleware packages can handle tasks such as user authentication, request logging, error handling, and more.</p>


                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <div className="flex items-center">
                            <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar" />
                            <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabIndex="0" role="link">Khatab wedaa</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;