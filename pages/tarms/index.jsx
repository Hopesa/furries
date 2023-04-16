import Head from 'next/head';
import React from 'react';
import Meta from '../../components/Meta';

const Tarms = () => {
	return (
		<div>
			<Meta title="" />
			<div className="pt-[5.5rem] lg:pt-24">
				{/* <!-- TOS --> */}
				<section className="dark:bg-jacarta-800 relative py-16 md:py-24">
					<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
						<img src="/images/gradient_light.jpg" alt="gradient" className="h-full w-full" />
					</picture>
					<div className="container">
						<h1 className="font-display text-jacarta-700 text-center text-4xl font-medium dark:text-white">
							Rules & Code of Conduct
						</h1>
						<div className="article-content mx-auto max-w-[48.125rem]">
							<h2 className="text-base">Introduction</h2>
							<p>
								As a community we have rules and code of conduct. Each groups we administer may have differing rules. But here are the general rules
								we should abide to.
							</p>
							<p>
								These rules are applicable to general groups under our community and our offline events that we administer, directly or indirectly.
							</p>

							<h2>Online Interaction</h2>

							<p>
							Groups under Indonesia Furs and our online platform/channel was created to help us get to know each other and socialize as fellow furs, so,
							act friendly and have fun! Avoid making posts that can offend or attack other members, such as trolling or flaming.

							If you interact with our online channels or members within our groups malicously, you will be warned and then blocked 
							if malicious behaviour is not stopped or adjusted. 
							Posts or comments that are deemed intolerant will be given a warning, and may be deleted. 
							If there is a post that members feel is malicious or an attack against individual or groups of people, report it to the admin immediately.
							</p>
							<p>
							We expect the best of online behaviour from our members, especially in public online spaces. If your actions are deemed to bring potentially
							bad exposure to us, we will be forced to distance our community from you and have you removed from our space. 	
							</p>

							<h2>Offline Events and Interaction</h2>

							<p>
								Our meets are generally very relaxed and unstructured. However we expect certain behaviour from members who joins our offline meets and events.
								Some meets or events may have their own rules, and different team managing them. But generally these would be rules that all events abide to. 
								We also would share unwanted individuals list among meets team.
							</p>

							<p>
								You are solely responsible for your behaviour and well-being. We expect you to use common sense and also abide to spesific rules that 
								our venue might have. We do not tolerate offensive behaviour such as coming to meets with offensive graphics and paraphenelia, or messages that
								may incite hatred. 
							</p>

							<p>
								Our meets are generally 16 and up, if its ticketed and done in an exclusive venues. If said beforehand, we expect you to abide by the age rules of the Events
								and to not skirt around the age rules. If you are under 16, you can join our public meets which took place sparingly every two months or so.
							</p>
						</div>
					</div>
				</section>
				{/* <!-- end TOS --> */}
			</div>
		</div>
	);
};

export default Tarms;
