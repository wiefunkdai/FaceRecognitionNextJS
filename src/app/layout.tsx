/**
 * SDaiLover Face Recognition for NextJS Framework.
 * 
 * Quickly and easily get started with machine learning technology 
 * that enables identifying and verifying individuals by analyzing 
 * and comparing patterns in their facial features. 
 * 
 * @link      https://www.sdailover.com
 * @email     teams@sdailover.com
 * @copyright Copyright (c) ID 2024 SDaiLover. All rights reserved.
 * @license   https://www.sdailover.com/license.html
 * This software using Yii Framework has released under the terms of the BSD License.
 */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./sdailover.css";

/**
 * Copyright (c) ID 2024 SDaiLover (https://www.sdailover.com).
 * All rights reserved.
 *
 * Licensed under the Clause BSD License, Version 3.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.sdailover.com/license.html
 *
 * This software is provided by the SDAILOVER and
 * CONTRIBUTORS "AS IS" and Any Express or IMPLIED WARRANTIES, INCLUDING,
 * BUT NOT LIMITED TO, the implied warranties of merchantability and
 * fitness for a particular purpose are disclaimed in no event shall the
 * SDaiLover or Contributors be liable for any direct,
 * indirect, incidental, special, exemplary, or consequential damages
 * arising in anyway out of the use of this software, even if advised
 * of the possibility of such damage.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Face Recognition by Stephanus Dai",
    template: "%s - Face Recognition by Stephanus Dai",
  },
  description: "Detection Face and Classification Image from Camera Device with NextJS"
};

/**
 * SDaiLover Root Layout script.
 * 
 * @author    : Stephanus Bagus Saputra,
 *              ( 戴 Dai 偉 Wie 峯 Funk )
 * @email     : wiefunk@stephanusdai.web.id
 * @contact   : https://t.me/wiefunkdai
 * @support   : https://opencollective.com/wiefunkdai
 * @link      : https://www.stephanusdai.web.id
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container as="header" className="col-lg-8 mx-auto p-4 pb-0 pt-md-5">
          <Row className="d-flex align-items-center pb-3 mb-5 border-bottom">
            <Col className="d-flex align-items-center justify-content-start nav-logo">
              <Link href="/"><Image src="/sdailover.svg" alt="SDaiLover Logo" className="me-3 dark:invert" width={100} height={100} priority /></Link>
            </Col>
            <Col className="d-flex align-items-center justify-content-end nav-powered">
              <Link href="https://vercel.com/sdailover">
                <Image src="/next.svg" alt="NextJS Logo" className="me-3 dark:invert" width={100} height={100} priority />
                <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={100} priority />
              </Link>
            </Col>
          </Row>
        </Container>

        <Container as="main" className="col-lg-8 mx-auto px-4 py-0">
          { children }
        </Container>

        <Container as="footer" className="col-lg-8 mx-auto px-4">
          <div className="d-flex flex-column align-items-center pt-3 mt-5 border-top">
            <p className="text-center text-body-secondary text-muted m-0">
              &copy; ID 2024 <Link href="https://sdailover.com" className="text-decoration-none text-muted">SDaiLover</Link>. All right reserved.
            </p>
            <p className="text-center text-body-secondary text-muted">
              Javascript Framework with <Link href="https://www.nextjs.org" className="text-decoration-none text-muted">NextJS</Link>
            </p>
          </div>
        </Container>
      </body>
    </html>
  );
}
