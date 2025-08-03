
import Button from "@/components/button";

export default function Hero() {
    return <section className="py-24">
        <div className="container">
            <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold ">
                    $10M seed round raised
                </div>
            </div>
            <h1 className="text-6xl font-medium text-center mt-6">Design Without Limits.</h1>
            <p className="text-center text-xl max-w-3xl m-auto text-white/50 mt-8">Designly unifies your team on a single real‑time canvas. Brainstorm ideas, create pixel‑perfect mockups, and hand off designs to developers — all without switching tools or losing momentum.</p>
            <form 
            className="flex justify-between max-w-xl mx-auto border border-white/15 rounded-full p-2 mt-8">
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    placeholder="Enter your email" 
                    className="bg-transparent px-4"
                />
                <Button type="submit"
                variant="primary"
                size="sm"
                className="whitespace-nowrap">Sign Up</Button>
            </form>   
        </div>
    </section>;
}
