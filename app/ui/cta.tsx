import Link from "next/link";

export default function CTA() {
    return (
        <div className="flex gap-5 text-xs mt-5 mb-10 text-white">
            <div>
                <Link href="mailto:partnerships@codextreme.io"><p className="text-center min-w-fit rounded-full border py-2 px-3 w-full">Partner With Us</p></Link>
            </div>
            <div>
                <Link href="mailto:team@codextreme.io"><p className="text-center min-w-fit rounded-full border py-2 px-3 w-full">Join Our Team</p></Link>
            </div>
        </div>
    );
}