import clsx from 'clsx'
import type { NextPage } from 'next'
import { Container, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from '@/components/common/TextBlock/styles.module.css'
import MetaTags from '@/components/common/MetaTags'

const RecruitingPrivacyPolicyPage: NextPage = () => (
  <>
    <MetaTags pageTitle="Safe – Recruiting Privacy Policy" />
    <Container className={clsx(layoutCss.containerTiny, css.block)}>
      <Typography variant="h1" style={{ textAlign: 'center' }}>
        Processing of (personal) data by the entity in charge of the online application process
      </Typography>
      <p>Last updated: January 2025</p>

      <Typography variant="h3">Privacy policy for the Core Contributors and SEF online application process </Typography>
      <p>
        Your privacy is important to us. It is our policy to respect your privacy and comply with any applicable law and
        regulation regarding any personal information we may collect about you, as part of the online application
        process through Ashby.
      </p>
      <p>
        In this policy, &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refers to Core Contributors GmbH, a
        company incorporated in Germany with its registered address at Gontardstraße 11, 10178 Berlin, Germany. Any data
        protection related questions you might have about how we handle your personal data or if you wish to exercise
        your data subject rights, please contact us by post or at{' '}
        <a href="mailto:dataprotection@safe.global">dataprotection@safe.global</a>.
      </p>
      <p>
        In this Policy, &ldquo;personal data&rdquo; means any information relating to you as an identified or
        identifiable natural person (&ldquo;Data Subject&rdquo;); an identifiable natural person is one who can be
        identified, directly or indirectly, in particular by reference to an identifier such as a name, an online
        identifier or to one or more factors specific to your physical, physiological, genetic, mental, economic,
        cultural or social identity.
      </p>
      <p>
        In this Policy, &ldquo;processing&rdquo; means any operation or set of operations which is performed on personal
        data (as defined in this Privacy Policy) or on sets of personal data, whether or not by automated means, such as
        collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation,
        use, disclosure by transmission, dissemination or otherwise making available, alignment or combination,
        restriction, erasure or destruction.
      </p>

      <Typography variant="h3">Data controller and responsible party</Typography>
      <p>Responsible for data processing in the sense of data protection law is:</p>
      <p>
        Core Contributors GmbH
        <br />
        ℅ WeWork
        <br />
        Dircksenstraße 3<br />
        10179 Berlin
        <br />
        Germany
        <br />
        Email address: privacy@cc0x.dev
      </p>
      <p>If you have any questions regarding data protection, please contact our data protection officer:</p>
      <p>
        TechGDPR DPC GmbH
        <br /> Willy-Brandt-Platz 2
        <br /> 12529 Berlin-Schönefeld
        <br /> Germany
        <br /> Email address: corecontributors.dpo@techgdpr.com
        <br /> Telephone: +49 (0)30 5490 8661
      </p>

      <Typography variant="h3">Applying to Safe Ecosystem Foundation vacancies</Typography>
      <p>
        When applying for a position for the Safe Ecosystem Foundation, the responsible party for data processing in the
        sense of data protection law is:
      </p>
      <p>
        Safe Ecosystem Foundation
        <br /> Bahnhofstrasse 16
        <br /> 6300 Zug, Switzerland
        <br /> CHE-295.207.842
        <br /> Email: <a href="mailto:dataprotection@safe.global">dataprotection@safe.global</a>
      </p>

      <Typography variant="h3">How we use your personal data</Typography>
      <p>For the purpose of reviewing and evaluating job applications, we process the following personal data:</p>
      <ol>
        <li>First and last name;</li>
        <li>
          CV and information contained therein, including: title, phone number; address, photo, education, professional
          experience;
        </li>
        <li>Information included in the cover letter/additional information section;</li>
        <li>Information provided in the how did you hear about this position open field;</li>
        <li>Pronouns;</li>
        <li>Salary expectation;</li>
        <li>Visa information e.g. right to work;</li>
        <li>Name of referee (if applicable).</li>
      </ol>
      <p>
        The legal basis for all these activities is taking necessary steps, at the request of the data subject, prior to
        entering into a contract with you i.e. employment contract (GDPR Art.6.1b).
      </p>
      <p>
        Your data will be stored for 6 months from the date of your application and then automatically deleted from the
        system.
      </p>
      <p>
        In the instance of a successful application and acceptance of this offer by the data subject, we will store the
        personal data collected during the application process for at least the duration of the employment relationship.
      </p>

      <Typography variant="h3">Data subject rights</Typography>
      <p>
        You have certain rights under applicable legislation, and in particular under Regulation EU 2016/679 (General
        Data Protection Regulation or &ldquo;GDPR&rdquo;). We explain these below. You can find out more about the GDPR
        and your rights by accessing the European Commission&apos;s website. If you wish to exercise your data subject
        rights, please contact us by post or at{' '}
        <a href="mailto:dataprotection@safe.global">dataprotection@safe.global</a>.
      </p>

      <ol>
        <li>Right to Information and access: </li>
        <p style={{ marginLeft: '-2em' }}>
          You have a right to be informed about the processing of your personal data (and if you did not give it to us,
          information as to the source) and this Privacy Policy intends to provide the information. Of course, if you
          have any further questions you can contact us on the above details.
        </p>
        <li>Right to rectification</li>
        <p style={{ marginLeft: '-2em' }}>
          You have the right to have any inaccurate personal information about you rectified and to have any incomplete
          personal information about you completed. You may also request that we restrict the processing of that
          information. The accuracy of your information is important to us. If you do not want us to use your Personal
          Information in the manner set out in this Privacy Policy, or need to advise us of any changes to your personal
          information, or would like any more information about the way in which we collect and use your Personal
          Information, please contact us at the above details.
        </p>
        <li>Right to erasure (right to be &apos;forgotten&apos;)</li>
        <p style={{ marginLeft: '-2em' }}>
          You have the general right to request the erasure of your personal information in the following circumstances:
        </p>
        <ul style={{ listStyleType: 'disc' }}>
          <li>the personal information is no longer necessary for the purpose for which it was collected;</li>
          <li style={{ marginTop: 0 }}>
            you withdraw your consent to consent based processing and no other legal justification for processing
            applies;
          </li>
          <li style={{ marginTop: 0 }}>you object to processing for direct marketing purposes;</li>
          <li style={{ marginTop: 0 }}>we unlawfully processed your personal information; and</li>
          <li style={{ marginTop: 0 }}>erasure is required to comply with a legal obligation that applies to us.</li>
        </ul>
        <p style={{ marginLeft: '-2em' }}>
          We will proceed to comply with an erasure request without delay unless continued retention is necessary for:
        </p>
        <ul style={{ listStyleType: 'disc' }}>
          <li>Exercising the right of freedom of expression and information;</li>
          <li style={{ marginTop: 0 }}>Complying with a legal obligation under EU or other applicable law;</li>
          <li style={{ marginTop: 0 }}>The performance of a task carried out in the public interest;</li>
          <li style={{ marginTop: 0 }}>
            Archiving purposes in the public interest, scientific or historical research purposes, or statistical
            purposes, under certain circumstances; and/or
          </li>
          <li style={{ marginTop: 0 }}>The establishment, exercise, or defense of legal claims.</li>
        </ul>
        <br />
        <li>Right to restrict processing and right to object to processing</li>
        <p style={{ marginLeft: '-2em' }}>
          You have a right to restrict processing of your personal information, such as where:
        </p>
        <ul style={{ listStyleType: 'disc' }}>
          <li>you contest the accuracy of the personal information;</li>
          <li style={{ marginTop: 0 }}>
            where processing is unlawful you may request, instead of requesting erasure, that we restrict the use of the
            unlawfully processed personal information;
          </li>
          <li style={{ marginTop: 0 }}>
            we no longer need to process your personal information but need to retain your information for the
            establishment, exercise, or defense of legal claims.
          </li>
        </ul>
        <p style={{ marginLeft: '-2em' }}>
          You also have the right to object to processing of your personal information under certain circumstances, such
          as where the processing is based on your consent and you withdraw that consent. This may impact the services
          we can provide and we will explain this to you if you decide to exercise this right.
        </p>
        <li>Right to data portability</li>
        <p style={{ marginLeft: '-2em' }}>
          Where the legal basis for our processing is your consent or the processing is necessary for the performance of
          a contract to which you are party or in order to take steps at your request prior to entering into a contract,
          you have a right to receive the personal information you provided to us in a structured, commonly used and
          machine-readable format, or ask us to send it to another person.
        </p>
        <li>Right to freedom from automated decision-making</li>
        <p style={{ marginLeft: '-2em' }}>
          We do not use automated decision-making, but where any automated decision-making takes place, you have the
          right in this case to express your point of view and to contest the decision, as well as request that
          decisions based on automated processing concerning you or significantly affecting you and based on your
          personal data are made by natural persons, not only by computers.
        </p>
        <li>Right to request access</li>
        <p style={{ marginLeft: '-2em' }}>
          You also have a right to access information we hold about you. We are happy to provide you with details of
          your Personal Information that we hold or process. To protect your personal information, we follow set storage
          and disclosure procedures, which mean that we will require proof of identity from you prior to disclosing such
          information. You can exercise this right at any time by contacting us on the above details.
        </p>
        <li>Right to withdraw consent</li>
        <p style={{ marginLeft: '-2em' }}>
          Where the legal basis for processing your personal information is your consent, you have the right to withdraw
          that consent at any time by contacting us on the above details.
        </p>
        <li>Raising a complaint about how we have handled your personal data</li>
        <p style={{ marginLeft: '-2em' }}>
          If you wish to raise a complaint on how we have handled your personal data, you can contact us as set out
          above and we will then investigate the matter.
        </p>
        <li>Right to lodge a complaint with a relevant supervisory authority</li>
        <p style={{ marginLeft: '-2em' }}>
          We encourage you to contact us at privacy@cc0x.dev if you have any privacy related concerns. Should you
          disapprove of the response we have provided you, you have the right to lodge a complaint with our supervisory
          authority, or with the data protection authority of the European member state you live or work in. The details
          of the supervisory authority responsible for Berlin, Germany, are:
        </p>{' '}
        <p style={{ marginLeft: '-2em' }}>
          Berliner Beauftragte für Datenschutz und Informationsfreiheit
          <br />
          Alt-Moabit 59-61
          <br /> 10555 Berlin
          <br />
          Germany
          <br /> Phone: 030/138 89-0
          <br /> http://www.datenschutz-berlin.de
        </p>
        <p style={{ marginLeft: '-2em' }}>
          You also have the right to lodge a complaint with the supervisory authority in the country of your habitual
          residence, place of work, or the place where you allege an infringement of one or more of our rights has taken
          place, if that is based in the EEA.
        </p>
      </ol>

      <Typography variant="h3">Final provisions</Typography>
      <p>
        We reserve the right to adjust this privacy policy at any time to ensure that it always complies with current
        legal requirements or to reflect changes in the application process. The new data protection declaration will
        then apply to a renewed visit to this recruiting page or a renewed application.
      </p>

      <Typography variant="h3">Processing of (personal) data by the operator of the recruitment website</Typography>
      <p>
        This recruitment website is operated by Ashby Inc., which offers a human resource and candidate management
        software solution (https://www.ashbyhq.com/resources/privacy). Data transmitted as part of your application is
        transferred to Ashby Inc. in accordance with a Data Processing Agreement between us and Ashby Inc, outlining
        security measures and instructions for safe transfer. The sole controller of this data within the meaning of
        Article 24 of the GDPR is the enterprise carrying out this online application process. Ashby&apos;s role is
        limited to operating the software and this recruitment website and, in this context, being a processor under
        article 28 of the GDPR. In addition, Ashby Inc. processes further data, some of which may be personal data, to
        provide its services, in particular for operating its recruitment platform. We will refer to this in more detail
        below.
      </p>

      <p>
        Ashby, Inc.
        <br /> 49 Geary Street, Suite 411
        <br /> San Francisco, CA, 94108
        <br /> Tel.: (925) 391-8292
        <br /> e-mail: privacy@ashbyhq.com
      </p>

      <p>
        Information on how Ashby Inc. processes your personal data as a controller can be found on its privacy notice:{' '}
        <a href="https://www.ashbyhq.com/resources/privacy">https://www.ashbyhq.com/resources/privacy</a>.
      </p>
    </Container>
  </>
)

export default RecruitingPrivacyPolicyPage
