import React from 'react'

const TermsAndConditions = () => {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            <style>
                {`
          [data-custom-class='title'] {
            font-family: Arial;
            font-size: 26px;
            color: #000000;
            font-weight: bold;
          }

          [data-custom-class='subtitle'] {
            font-family: Arial;
            font-size: 14px;
            color: #595959;
          }

          [data-custom-class='heading_1'] {
            font-family: Arial;
            font-size: 19px;
            color: #000000;
            font-weight: bold;
            margin-top: 2.5rem;
          }

          [data-custom-class='body_text'] {
            font-family: Arial;
            font-size: 14px;
            color: #595959;
            line-height: 1.6;
            margin-top: 0.75rem;
          }

          [data-custom-class='link'] {
            color: #3030F1;
            text-decoration: none;
          }

          [data-custom-class='link']:hover {
            text-decoration: underline;
          }

          ul[data-custom-class='body_text'] {
            padding-left: 1.25rem;
          }

          ul[data-custom-class='body_text'] li {
            margin-bottom: 0.5rem;
          }
        `}
            </style>

            <div data-custom-class="body">

                <div data-custom-class="title">
                    TERMS AND CONDITIONS
                </div>

                <div data-custom-class="subtitle">
                    Last updated December 14, 2025
                </div>

                <div data-custom-class="heading_1">
                    1. About This Website
                </div>
                <p data-custom-class="body_text">
                    This website is a personal portfolio and service information website
                    operated by Tiago Costa Rebelo (trading as TiagoCR). It is intended to
                    showcase design and web development work, provide information about
                    services offered, and allow users to contact the site owner via a
                    contact form or email.
                </p>

                <div data-custom-class="heading_1">
                    2. Use of the Website
                </div>
                <p data-custom-class="body_text">
                    You agree to use this website only for lawful purposes and in a way that
                    does not infringe the rights of others or restrict or inhibit their use
                    of the website.
                </p>

                <div data-custom-class="heading_1">
                    3. Prohibited Activities
                </div>
                <ul data-custom-class="body_text">
                    <li>Advertise or offer to sell goods or services without permission</li>
                    <li>Engage in unlawful, fraudulent, or misleading activities</li>
                    <li>Attempt to interfere with the security or proper functioning of the website</li>
                </ul>

                <div data-custom-class="heading_1">
                    4. Intellectual Property
                </div>
                <p data-custom-class="body_text">
                    All content on this website, including text, images, graphics, branding,
                    and code, is owned by or licensed to Tiago Costa Rebelo (trading as
                    TiagoCR), unless otherwise stated. You may not copy, reproduce, or
                    distribute any content without prior written permission.
                </p>

                <div data-custom-class="heading_1">
                    5. Third-Party Links
                </div>
                <p data-custom-class="body_text">
                    This website may contain links to third-party websites that are not
                    owned or controlled by us. We are not responsible for the content,
                    privacy practices, or availability of any third-party websites.
                </p>

                <div data-custom-class="heading_1">
                    6. Limitation of Liability
                </div>
                <p data-custom-class="body_text">
                    To the fullest extent permitted by law, we shall not be liable for any
                    loss or damage arising out of or in connection with your use of this
                    website, including indirect, incidental, or consequential loss.
                </p>

                <div data-custom-class="heading_1">
                    7. Privacy
                </div>
                <p data-custom-class="body_text">
                    Your use of this website is also governed by our Privacy Policy, which
                    can be found at{' '}
                    <a
                        href="https://tiagocr.me/privacy-policy"
                        data-custom-class="link"
                    >
                        https://tiagocr.me/privacy-policy
                    </a>.
                </p>

                <div data-custom-class="heading_1">
                    8. Governing Law
                </div>
                <p data-custom-class="body_text">
                    These Terms are governed by and interpreted in accordance with the laws
                    of England and Wales. Any disputes shall be subject to the exclusive
                    jurisdiction of the courts of the United Kingdom.
                </p>

                <div data-custom-class="heading_1">
                    9. Contact
                </div>
                <p data-custom-class="body_text">
                    If you have any questions about these Terms, you may contact us at{' '}
                    <a
                        href="mailto:tiago@tiagocr.me"
                        data-custom-class="link"
                    >
                        tiago@tiagocr.me
                    </a>.
                </p>

            </div>
        </main>
    );
};

export default TermsAndConditions;


