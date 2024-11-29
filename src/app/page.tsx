import Image from "next/image";

export default function Home(){
  return(
    <div>
    <div className=" flex font-serif text-blue-500 m-5 justify-center ">
      <h1 className="text-blue-700 text-center md:text-yellow-400  lg:text-red-700  text-4xl md:text-4xl lg:text-6xl underline ">Responsive web</h1>
    </div>

    <div className="flex sm:flex-row flex-col justify-around m-8 ">
    <div className=" sm:w-5/12  mx-5 w-full mb-20">
    <Image src= "/img.jpg" alt="product" height={300} width={350}>
    </Image>
    <p className="text-green-600 m-2 text-xl ">Rs--500rs/</p>
    <div className="flex justify-center items-center">
      <button className="px-8 py-4 bg-red-600 text-white rounded-md">Buy Now</button></div>
   </div>

   <div className="  sm:w-5/12 mx-5 w-full mb-20">
    <Image src= "/img.jpg" alt="product" height={300} width={350}>
    </Image>
    <p className="text-green-600 m-2 text-xl">Rs--500rs/</p>
    <div className="flex justify-center items-center my-3" >
      <button className="px-8 py-4 bg-blue-600 text-white rounded-md">Buy Now</button></div>
   </div>

   <div className=" sm:w-5/12 mx-5 w-full mb-20">
    <Image src= "/img.jpg" alt="product" height={300} width={350}>
    </Image>
    <p className="text-green-600 m-2 text-xl">Rs--500rs/</p>
    <div className="flex justify-center items-center my-3">
      <button className="px-8 py-4 bg-purple-600 text-white rounded-md">Buy Now</button></div>
   </div>

   </div>
  
   {/*Footer*/}
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Section 1 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Me</h2>
            <p className="text-sm text-gray-300">
              We are committed to delivering the best services with customer satisfaction as our top priority.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
            <p className="text-sm text-gray-300">
              Email: support@example.com
            </p>
            <p className="text-sm text-gray-300">
              Phone: +1 (123) 456-7890
            </p>
            <p className="text-sm text-gray-300">
              Address: 123 Main Street, Cityville
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">My Mission</h2>
            <p className="text-sm text-gray-300">
              To innovate and inspire through quality products and excellent service.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Made by MJ .All rights reserved.
        </div>
      </div>
    </footer>

  </div>
  )
}
