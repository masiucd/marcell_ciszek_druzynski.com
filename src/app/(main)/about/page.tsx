import {PageWrapper} from "@/components/page-wrapper";
import siteData from "@/config/site-data";
import Image from "next/image";
import type {Metadata} from "next/types";
import {H1, Lead, P} from "~/src/components/typography";

export const metadata: Metadata = {
	title: `${siteData.site.title} | About`,
	description: `Learn more about ${siteData.site.author}.`,
};

function AboutPage() {
	return (
		<PageWrapper>
			<div className="relative flex gap-10">
				<article className="prose dark:prose-dark px-10">
					<H1>About me</H1>
					<Lead>
						I'm a software engineer who loves to build things. I'm passionate
						about web development, open-source software, and building
						communities. I enjoy writing about my experiences and sharing what
						I've learned with others in the tech industry.
					</Lead>
					<P>
						I'm currently working as a software engineer at a startup in San
						Francisco. I have experience working with a variety of technologies,
						including React, Node.js, TypeScript, and GraphQL. I'm always
						looking for new challenges and opportunities to learn and grow as a
						developer.
					</P>

					<P>
						In my free time, I enjoy working on side projects, contributing to
						open-source software, and writing blog posts about web development
						and software engineering. I'm also an avid reader and enjoy learning
						about new technologies and trends in the tech industry.
					</P>

					<P>
						I am a endurance freak and I love to run. I have completed 3 full
						marathons and 5 half marathons. I also have a big passion for
						boxing(Muay Thai) and I have been practicing and competing for the
						since I was 15 years old. No matter how busy I am, I always make
						time for my hobbies and I believe that they are an important part of
						my life and help me stay balanced and focused.
					</P>

					<P>
						If you'd like to get in touch, feel free to send me an email at{" "}
						<a href={`mailto:${siteData.site.email}`}>{siteData.site.email}</a>.
						I'm always open to new opportunities and collaborations, so don't
						hesitate to reach out!
					</P>
					<P>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						perferendis quo dolorem hic possimus, iste quia eaque. Expedita
						perspiciatis corporis commodi iste a ipsum quae hic aperiam! Ipsa
						deleniti similique ab doloremque doloribus, ad vero dolorum.
						Incidunt obcaecati accusantium culpa rerum, eos exercitationem
						provident vitae tempore similique sapiente alias? Commodi eum, earum
						soluta possimus ullam tempore ut? Mollitia voluptas eveniet et
						soluta quos repudiandae adipisci esse enim est, illum ipsam atque
						fugiat, necessitatibus accusantium vel libero totam aperiam odio?
						Magni est pariatur inventore commodi? Dolor sequi quam id ex impedit
						harum inventore quasi recusandae facilis adipisci, quod, reiciendis
						vel illo, quae magni ea qui totam dolores nesciunt incidunt minus
						expedita saepe autem suscipit. Impedit porro modi nemo suscipit esse
						ducimus fuga nesciunt obcaecati enim odio autem officiis
						consequuntur saepe, in non sit explicabo nam blanditiis rem
						perferendis assumenda doloribus voluptas at? Aspernatur facilis
						officia excepturi ipsum. Sint esse repellendus, molestiae eveniet
						nemo assumenda neque incidunt autem blanditiis! Laboriosam totam
						natus veniam? Itaque ullam hic dolorem exercitationem, expedita
						totam nobis esse doloremque labore eaque libero illum nisi! Unde
						quas inventore id eius nostrum saepe. Nemo omnis non sapiente
						consequatur exercitationem aspernatur quasi suscipit ea sed
						voluptate quidem odio veritatis facere qui laboriosam iure, hic
						vitae autem pariatur amet. Sed, nemo facere? Impedit sunt nihil
						blanditiis iusto accusantium itaque, possimus ea quae fugiat dolor
						qui laborum non. Quibusdam accusantium illum ullam nam quo
						voluptatibus voluptatum, numquam, vel recusandae commodi vitae atque
						enim dolorem inventore cumque amet! Similique voluptatem culpa
						consectetur qui iste tenetur, aut tempore ratione voluptates,
						aspernatur esse dolor, hic fuga aliquid laboriosam odit animi? Omnis
						nemo perferendis quos unde odio culpa nisi, odit fugiat
						exercitationem nihil, veritatis quibusdam, numquam aut. Quisquam
						quia aliquam pariatur omnis dolorum sed ex sint atque repudiandae
						facere dignissimos, qui laborum cum repellat tenetur consectetur
						voluptatum est optio consequuntur. Soluta odio maiores asperiores
						expedita architecto voluptates libero, rerum quibusdam id
						reprehenderit, voluptate sequi possimus aut fugiat facere. Fuga
						aliquid vitae qui omnis incidunt minus, cupiditate necessitatibus
						expedita quia reiciendis quisquam illo obcaecati voluptates sit
						inventore? Possimus quaerat aliquid, consequuntur esse dolor beatae
						incidunt voluptatum culpa et labore suscipit eius pariatur officiis
						quasi ea dolorem rem quo ducimus necessitatibus eveniet quidem
						dolore eum provident! Deserunt doloremque, eos dolorum repudiandae
						nemo aliquam itaque vitae ut placeat quos exercitationem quam
						voluptates qui id ex assumenda dicta dolorem quo dolor neque.
						Placeat officiis temporibus repellendus sapiente ea quaerat nulla
						repudiandae! Quidem quae voluptate nam veritatis necessitatibus, rem
						exercitationem ullam quos placeat labore laboriosam dolore numquam
						repellendus cumque! Odio inventore accusamus nulla minima at!
						Reiciendis, distinctio sequi culpa eligendi a temporibus hic
						deleniti ipsam ab recusandae maxime doloremque id! Ducimus nulla
						dolores nesciunt. Reprehenderit fuga ut aliquam provident quae.
						Veniam iure qui incidunt maxime eligendi neque minima reprehenderit.
						Alias natus eaque sunt ipsum dolores aspernatur consectetur porro
						aliquid optio molestiae velit harum nam autem dolor sapiente, fugit
						consequuntur tempore exercitationem sit. Explicabo dignissimos saepe
						unde accusamus, nisi veniam excepturi exercitationem dicta amet,
						magnam consectetur debitis optio, ex cumque vel officia
						consequuntur! Id rem quod voluptatibus deserunt. Vel culpa, odit
						saepe soluta perferendis laudantium facilis obcaecati quasi optio
						aspernatur dignissimos dolores nulla corporis dolor ipsa sunt nisi
						nam architecto explicabo ex sapiente? Pariatur in asperiores id sit
						fugit sapiente illo mollitia magni cumque autem laboriosam minus,
						praesentium provident nesciunt perferendis unde nulla dolorum!
						Repellendus culpa, expedita ipsum obcaecati amet ea quia. Explicabo,
						iure obcaecati nam magnam expedita reiciendis voluptas illo suscipit
						cum tenetur fuga repellendus accusamus minima similique cumque at,
						eveniet nostrum reprehenderit repudiandae eos voluptatum. Non sint
						possimus excepturi saepe natus quibusdam explicabo ad fugiat
						aspernatur eius, veritatis omnis pariatur. Assumenda.
					</P>
				</article>
				<div className="mt-5 hidden grow-1 md:block">
					<Image
						src="/me.png"
						alt="Picture of the author"
						width={500}
						height={500}
						about="Picture of the author"
						quality={100}
						sizes="(max-width: 500px) 100vw, 500px"
						className="sticky top-0 rounded shadow-lg"
					/>
				</div>
			</div>
		</PageWrapper>
	);
}

export default AboutPage;
