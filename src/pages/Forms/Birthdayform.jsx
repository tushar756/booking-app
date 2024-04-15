// import React from 'react'

// const Birthdayform = () => {
//   return (
//     <>
//       <div class="container flex w-[100vw] gap-y-11 mx-auto p-4">
//         <img class="w-[50%] rounded-l-lg" src="/img/Carousel  Birthday Party Ideas _ Photo 26 of 26.jpeg" alt="image" />
//         <form class="w-[50%] mx-auto bg-pink-100 rounded-r-lg shadow-md p-6">
//           <h2 class="text-2xl font-bold mb-4">Booking Form</h2>

//           <div class="mb-4">
//             <label class="block text-gray-700 text-sm font-bold mb-2" for="booking-from">Booking Date</label>
//             <input class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="date" id="booking-from" name="booking-from"/>
//           </div>

//           <div class="mb-4">
//             <label class="block text-gray-700 text-sm font-bold mb-2" for="event-type">Type of Event</label>
//             <select class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" id="event-type" name="event-type">
//               <option value="birthday">Birthday</option>
//               <option value="anniversary">Anniversary</option>
//               <option value="Others">Others</option>
//             </select>
//           </div>

//           <div class="mb-4">
//             <label class="block text-gray-700 text-sm font-bold mb-2" for="guest-count">Number of Guests</label>
//             <input class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" id="guest-count" name="guest-count"/>
//           </div>

//           <div class="mb-4">
//             <label class="block text-gray-700 text-sm font-bold mb-2">Food Menu</label>
//             <div class="flex flex-col gap-2">
//               <label class="flex items-center">
//                 <input type="checkbox" class="form-checkbox border-gray-300 rounded" id="breakfast" name="breakfast">
//                   <span class="ml-2">Breakfast</span>
//               </label>
//               <label class="flex items-center">
//                 <input type="checkbox" class="form-checkbox border-gray-300 rounded" id="lunch" name="lunch">
//                   <span class="ml-2">Lunch</span>
//               </label>
//               <label class="flex items-center">
//                 <input type="checkbox" class="form-checkbox border-gray-300 rounded" id="dinner" name="dinner">
//                   <span class="ml-2">Dinner</span>
//               </label>
//               <div class="mb-4">
//                 <label class="block text-gray-700 text-sm font-bold mb-2" for="in-house-dj">In-House DJ</label>
//                 <input type="checkbox" id="in-house-dj" name="in-house-dj" value="10000">
//                   <span class="ml-2">In-House DJ </span>
//               </div>
//             </div>
//           </div>
//           <div class="mb-4">
//             <label class="block text-gray-700 text-sm font-bold mb-2" for="wedding-cake">Cake (kg)</label>
//             <input type="number" id="wedding-cake" name="wedding-cake" min="1" max="10">
//           </div>
//           <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" id="calculate-total">Calculate Total</button>
//           <p id="total-price"></p>

//           <div class="mb-4">
//             <label class="block text-gray-700 text-sm font-bold mb-2" for="messages">Your Customization (Optional)</label>
//             <textarea class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" id="messages" name="messages" rows="3"></textarea>
//           </div>
//           <div class="mb-4">
//             <label class="block text-gray-700 text-sm font-bold mb-2" for="payment-method">Payment Method</label>
//             <select class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               id="payment-method" name="payment-method">
//               <option value="credit-card">Credit Card</option>
//               <option value="paypal">PayPal</option>
//               <option value="bank-transfer">Bank Transfer</option>
//             </select>
//           </div>
//           <div class="mb-4">
//             <label class="block text-gray-700 text-sm font-bold mb-2" for="proof-of-payment">Proof of Payment (QR Code)</label>
//             <input type="file" id="proof-of-payment" name="proof-of-payment">
//           </div>

//           <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" id="book-now" type="button">Book Now</button>
//           <div id="booking-status"></div>
//         </form>
//       </div>
//     </>
//   )
// }

// export default Birthdayform





import React, { useState } from 'react';

function Birthdayform() {
  const [totalPrice, setTotalPrice] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');

  const calculateTotal = () => {
    const selectedGuests = parseInt(document.getElementById('guest-count').value);
    const guestsPricePerDay = 6000;
    const inHouseDJPricePerDay = 10000;
    const weddingCakePricePerKg = 1000;
    const breakfastPrice = 800;
    const lunchPrice = 1000;
    const dinnerPrice = 1500;

    let totalPrice = 0;

    totalPrice += selectedGuests * guestsPricePerDay;

    if (document.getElementById('breakfast').checked) {
      totalPrice += breakfastPrice * selectedGuests;
    }
    if (document.getElementById('lunch').checked) {
      totalPrice += lunchPrice * selectedGuests;
    }
    if (document.getElementById('dinner').checked) {
      totalPrice += dinnerPrice * selectedGuests;
    }

    if (document.getElementById('in-house-dj').checked) {
      totalPrice += inHouseDJPricePerDay;
    }

    const weddingCakeWeight = parseInt(document.getElementById('wedding-cake').value);
    if (!isNaN(weddingCakeWeight) && weddingCakeWeight > 0) {
      totalPrice += weddingCakeWeight * weddingCakePricePerKg;
    }

    setTotalPrice(`Total Price: ₹${totalPrice.toLocaleString()}`);
  };

  const bookNow = () => {
    const proofOfPaymentInput = document.getElementById('proof-of-payment');
    const bookingStatusDiv = document.getElementById('booking-status');

    if (!proofOfPaymentInput.files.length) {
      setBookingStatus('Please upload proof of payment.');
      return;
    }

    setBookingStatus('Your booking is confirmed. Please proceed to make your payment.');
  };

  return (
    <div className="container flex w-[100vw] gap-y-11 mx-auto p-4">
      <img className="w-[50%] rounded-l-lg" src="/img/Carousel  Birthday Party Ideas _ Photo 26 of 26.jpeg" alt="image" />
      <form className="w-[50%] mx-auto bg-pink-100 rounded-r-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Booking Form</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="booking-from">Booking Date</label>
          <input className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="date" id="booking-from" name="booking-from" />
        </div>
        {/* Other form fields */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={calculateTotal}>Calculate Total</button>
        <p id="total-price">{totalPrice}</p>
        {/* Other form fields */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={bookNow} type="button">Book Now</button>
        <div id="booking-status">{bookingStatus}</div>
      </form>
    </div>
  );
}

export default BookingForm;
