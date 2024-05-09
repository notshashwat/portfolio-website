'use client';
export default function Contact() {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "c00830dd-13b1-4d70-ae4e-cacc2b95c58a");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }

  return (
    <>
    <div className="flex flex-col items-center py-10">
    <h2 className="text-3xl text-pink-800 font-semibold p-2">Contact Me</h2>

      <form className="flex flex-col items-center py-5" onSubmit={handleSubmit}>
      <input className="my-3 bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" name="Name" placeholder="Name"/>
        {/* <input className="shadow-md " type="text" name="name"/> */}
        <input className="my-3 bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="email" name="Email" placeholder="Email"/>

        {/* <input className="shadow-md" type="email" name="email"/> */}
        <textarea className="my-3 shadow-sm bg-gray-200  border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="message" name="message" placeholder="Message"></textarea>

        {/* <textarea className="shadow-md" name="message"></textarea> */}
        {/* <button className="shadow-md" type="submit">Submit Form</button> */}
        <button class="flex-shrink-0 border-black bg-pink-800 border-1 text-white hover:shadow-sm hover:bg-pink-400 text-sm py-3 px-5 rounded" type="submit">
      Submit
    </button>
      </form>

    </div>
    </>
  );
}