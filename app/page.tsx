import Image from 'next/image';
import logo from '../assets/logo.svg';
import landingImg from '../assets/main.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
	return (
		<main>
			<header className='max-w-6xl mx-auto px-4 sm:px-8 py-6'>
				<Image src={logo} alt='logo' />
			</header>
			<section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center'>
				<div>
					<h1 className='capitalize text-4xl md:text-7xl font-bold'>
						job <span className='text-primary'>tracking</span> app
					</h1>
					<p className='leading-loose max-w-md mt-4'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae et, fugit, minus sapiente repellat
						dolorem numquam optio, perspiciatis debitis ipsa provident maxime esse. Eum voluptatem et illum, ex
						distinctio beatae! Sunt aliquam explicabo obcaecati quas corrupti accusantium qui! Itaque atque hic cumque
						sunt temporibus illo error maiores, tenetur similique voluptatibus, est ratione rem provident labore aut
						libero ex neque repudiandae!
					</p>
					<Button asChild className='mt-4'>
						<Link href='/add-job'>Get Started</Link>
					</Button>
				</div>
				<Image src={landingImg} alt='landing' className='hidden lg:block' />
			</section>
		</main>
	);
}
