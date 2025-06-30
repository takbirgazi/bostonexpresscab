'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
// import Image from 'next/image';

export default function PayPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const searchParams = useSearchParams();
    const user = searchParams.get('user') || '';
    interface TokenizeResult {
        status: string;
        token?: string;
        errors?: { message: string }[];
    }

    const [card, setCard] = useState<{ tokenize: () => Promise<TokenizeResult>; attach: (selector: string) => Promise<void> } | null>(null);

    useEffect(() => {
        async function loadSquare() {
            type SquarePayments = {
                card: () => Promise<{
                    tokenize: () => Promise<TokenizeResult>;
                    attach: (selector: string) => Promise<void>;
                }>;
            };

            type SquareWindow = {
                Square: {
                    payments: (appId: string, locationId: string) => SquarePayments;
                };
            };

            const payments = (window as unknown as SquareWindow).Square.payments(
                process.env.NEXT_PUBLIC_SQUARE_APP_ID as string,
                process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID as string
            );
            const card = await payments.card();
            await card.attach('#card-container');
            setCard(card);
            console.log("load in load")
        }

        const script = document.createElement('script');
        script.src = 'https://sandbox.web.squarecdn.com/v1/square.js';
        script.onload = loadSquare;
        document.head.appendChild(script);
    }, []);
    console.log("load")
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!card) return;

        const result = await card.tokenize();
        if (result.status === 'OK') {
            const formData = {
                user,
                nonce: result.token,
            };
            console.log(result)
            const response = await fetch('http://your-laravel-domain.com/api/payment/process', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (data.success) {
                alert('Payment successful!');
            } else {
                alert('Payment failed!');
            }
        } else {
            alert(result.errors?.[0]?.message || 'Payment error');
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-300 to-blue-300 p-4">
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-gradient-to-r from-cyan-700 via-green-400 to-lime-400 rounded-lg p-6 w-full max-w-xl"
            >
                <div className="flex justify-end gap-2 mb-4">
                    {/* {['visa', 'mastercard', 'amex', 'discover', 'jcb', 'diners', 'unionpay'].map((brand) => (
                        <Image
                            key={brand}
                            src={`https://img.icons8.com/color/48/000000/${brand}.png`}
                            alt={brand}
                            width={40}
                            height={40}
                            className="w-10"
                        />
                    ))} */}
                </div>
                <div id="card-container" className="mb-4"></div>
                <button
                    type="submit"
                    className="w-full text-white bg-green-700 hover:bg-green-800 rounded-full py-3 uppercase font-semibold transition-all"
                >
                    Pay $1.00
                </button>
            </form>
        </div>
    );
}
