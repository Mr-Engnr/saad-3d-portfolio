import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const clientProjects = [
  { name: "AI InterConnect", url: "https://www.aiinterconnect.com/", domain: "aiinterconnect.com" },
  { name: "SusuKonnect", url: "https://susukonnect.com/", domain: "susukonnect.com" },
  { name: "8K AI Films", url: "https://8kaifilms.com/", domain: "8kaifilms.com" },
];

const ClientWorks = () => (
  <div className='border-b border-secondary/20 pb-10 sm:pb-16' aria-labelledby='client-work-heading'>
    <p className={styles.sectionSubText}>Client collaborations</p>
    <h2 id='client-work-heading' className={styles.sectionHeadText}>
      Selected Client Work.
    </h2>
    <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      A selection of client projects. Explore each live website below.
    </p>

    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'>
      {clientProjects.map(({ name, url, domain }) => (
        <article key={url} className='green-pink-gradient rounded-2xl p-px min-w-0'>
          <div className='bg-tertiary rounded-2xl p-6 h-full flex flex-col items-start'>
            <span className='rounded-full border border-secondary/30 px-3 py-1 text-secondary text-[12px] font-medium'>
              Client Project
            </span>
            <h3 className='mt-6 text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px] break-all'>{domain}</p>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Visit ${name} live site (opens in a new tab)`}
              className='mt-8 inline-flex min-h-[44px] items-center gap-3 rounded-lg border border-secondary/30 px-4 py-2 text-white text-[14px] font-medium transition-colors hover:bg-secondary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
            >
              Visit live site
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' focusable='false'>
                <path d='M15 3h6v6M10 14 21 3' />
                <path d='M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5' />
              </svg>
            </a>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default SectionWrapper(ClientWorks, "client-work");
