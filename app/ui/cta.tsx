import Link from "next/link";

export default function CTA() {
    return (
        <div className="flex flex-col md:flex-row gap-3 md:gap-5 text-sm mt-5 mb-5 md:mb-10 text-white">
            <div>
                <Link href="mailto:partnerships@codextreme.io"><p className="inline-block bg-white/10 backdrop-blur-lg font-bold py-4 px-4 md:px-8 hover:scale-105 transition-colors duration-300 text-center w-full md:min-w-fit">Partner With Us</p></Link>
            </div>
            <div>
                <Link href="mailto:team@codextreme.io"><p className="inline-block bg-white/10 backdrop-blur-lg font-bold py-4 px-4 md:px-8 hover:scale-105 transition-colors duration-300 text-center w-full md:min-w-fit">Join Our Team</p></Link>
            </div>
        </div>
    );
}