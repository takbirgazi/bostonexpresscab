
import { Metadata } from 'next';
import AddToCartClient from './AddToCartClient';

export const metadata: Metadata = {
  title: "Add To Cart",
}

export default function BookingSummaryPage() {
  return (
    <AddToCartClient />
  );
}



// <!-- HTML Meta Tags -->
// <title>Boston Express Cab - Logan Airport Car & Taxi Service | Boston Taxi</title>
// <meta name="description" content="Call Boston Carb at +16172306362 and book your affordable Logan Airport taxi/Boston car service and Boston cab service with child seats. We have been providing the most trusted and reliable taxi service in Boston, MA.">

// <!-- Facebook Meta Tags -->
// <meta property="og:url" content="https://bostonexpresscab.com">
// <meta property="og:type" content="website">
// <meta property="og:title" content="Boston Express Cab - Logan Airport Car & Taxi Service | Boston Taxi">
// <meta property="og:description" content="Call Boston Carb at +16172306362 and book your affordable Logan Airport taxi/Boston car service and Boston cab service with child seats. We have been providing the most trusted and reliable taxi service in Boston, MA.">
// <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/74a88b54-8acf-4a1d-9ebe-8b39445e8dd2.png?token=fiG6eZqz7yaJmxkVsIAdL9l-Z1a_Q1zLx_8OITj8rJg&height=630&width=1200&expires=33287522291">

// <!-- Twitter Meta Tags -->
// <meta name="twitter:card" content="summary_large_image">
// <meta property="twitter:domain" content="bostonexpresscab.com">
// <meta property="twitter:url" content="https://bostonexpresscab.com">
// <meta name="twitter:title" content="Boston Express Cab - Logan Airport Car & Taxi Service | Boston Taxi">
// <meta name="twitter:description" content="Call Boston Carb at +16172306362 and book your affordable Logan Airport taxi/Boston car service and Boston cab service with child seats. We have been providing the most trusted and reliable taxi service in Boston, MA.">
// <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/74a88b54-8acf-4a1d-9ebe-8b39445e8dd2.png?token=fiG6eZqz7yaJmxkVsIAdL9l-Z1a_Q1zLx_8OITj8rJg&height=630&width=1200&expires=33287522291">

// <!-- Meta Tags Generated via https://www.opengraph.xyz --></meta>