import Link from "next/link";

export default function CTA() {
    return (
        <div className="flex gap-5 text-xs mt-5 mb-10 text-white">
            <div>
                <Link href="mailto:partnerships@codextreme.io"><p className="inline-block bg-white/10 backdrop-blur-lg font-bold py-4 px-4 md:px-8 hover:scale-105 transition-colors duration-300 text-center min-w-fit">Partner With Us</p></Link>
            </div>
            <div>
                <Link href="mailto:team@codextreme.io"><p className="inline-block bg-white/10 backdrop-blur-lg font-bold py-4 px-4 md:px-8 hover:scale-105 transition-colors duration-300 text-center min-w-fit">Join Our Team</p></Link>
            </div>
        </div>
    );
}