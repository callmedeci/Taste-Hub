import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function initLenis() {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(time => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return lenis;
}
