"use client"
import { useAppSelector } from '@/lib/hooks';
import Link from 'next/link';
// import { useState } from 'react';

export default function ThankYouPage() {

    const fromData = useAppSelector(state => state.formData);
    const uuid = fromData.usrId;
    // const [invoice, setInvoice] = useState("")
    console.log(uuid)

    const handleDownload = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/invoice-pdf`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    uuid: uuid, // <-- use actual UUID
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const blob = await response.blob(); // Handle response as a blob (PDF)
            const url = window.URL.createObjectURL(blob);

            // Create a temporary anchor tag to download the PDF
            const a = document.createElement('a');
            a.href = url;
            a.download = 'invoice.pdf'; // Set your filename here
            document.body.appendChild(a);
            a.click();

            // Clean up
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
        }
    };

    return (
        <main className='min-h-screen bg-[#ffffff]'>
            <div className='h-[90px] bg-gray-700'></div>
            <div className="flex flex-col items-center justify-center p-6 text-center mt-5">
                <div className="max-w-xl w-full bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200">
                    <h1 className="text-4xl font-bold text-mainColor mb-4">🎉 Thank You!</h1>
                    <p className="text-lg font-semibold text-gray-800 mb-4">
                        Your ride has been successfully booked.
                    </p>
                    <p className="text-gray-600 mb-2">
                        We’ve sent you a confirmation via SMS and email with your invoice.
                    </p>
                    <p className="text-gray-600 mb-2">
                        You can download the invoice or share your booking details through WhatsApp.
                    </p>
                    <p className="text-gray-600 mb-2">
                        If you don&apos;t see the confirmation email, please check your spam or junk folder.
                    </p>
                    <p className="text-green-700 mt-4 font-medium">
                        We’ll remind you 1–2 days before your ride when your driver is assigned. See you soon!
                    </p>

                    <div className="mt-6 flex gap-2 items-center justify-center">
                        <Link href="/" className="inline-block bg-mainColor text-white font-semibold px-6 py-1.5 rounded transition" >Back to Home </Link>
                        <a onClick={handleDownload} download className="inline-block bg-mainColor text-white font-semibold px-6 py-1.5 rounded cursor-pointer transition">Download</a>
                    </div>
                </div>
            </div>
        </main>
    );
}