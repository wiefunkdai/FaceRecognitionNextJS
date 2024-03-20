'use strict';
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

import Image from "next/image";
import Link from "next/link";
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

/**
 * SDaiLover Home page script.
 * 
 * @author    : Stephanus Bagus Saputra,
 *              ( 戴 Dai 偉 Wie 峯 Funk )
 * @email     : wiefunk@stephanusdai.web.id
 * @contact   : https://t.me/wiefunkdai
 * @support   : https://opencollective.com/wiefunkdai
 * @link      : https://www.stephanusdai.web.id
 */
export default function Home() {
  return (
    <>
      <h1 className="text-body-emphasis">Face Recognition Example</h1>
      <p className="fs-5 col-md-8">Quickly and easily get started with machine learning technology that enables identifying and verifying individuals by analyzing and comparing patterns in their facial features. Download this source examples to get started.</p>
      <div className="mb-5">
        <Link type="button" className="btn btn-primary btn-lg px-4" href={ '/take' }><i className="bi bi-record-circle-fill"></i> Start Demo</Link>
        <Link type="button" className="btn btn-outline-primary btn-lg px-4 ms-0 ms-md-2 mt-3 mt-md-0" href={ 'https://github.com/wiefunkdai/facerecognition-nextjs' }><i className="bi bi-github"></i> Get Source</Link>
      </div>
      <hr className="col-3 col-md-2 mb-5" />
      <div className="row g-3 g-md-5">
            <div className="col-md-6">
                <h2 className="text-body-emphasis">Author &amp; Contributors:</h2>
                <p>SDaiLover is maintained by the founding team and a small group of invaluable core contributors, with the massive support and involvement of our projections.</p>
            </div>
            <div className="col-md-6">
                <div className="list-group mb-3">
                    <div className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start px-3 py-3">
                        <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                            <Image src="/wiefunkdai.png" alt="@wiefunkdai" className="rounded me-2" width={32} height={32} priority />                         
                            <p className="ms-1 mb-0">
                              <a className="text-decoration-none" href="https://stephanusdai.web.id">Stephanus Bagus Saputra</a>
                            </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-end ms-auto pt-1 pt-md-0">
                            <a type="button" className="btn btn-sm me-1 btn-outline-primary" href="https://stephanusdai.web.id">
                            <i className="bi bi-house-heart-fill"></i></a>
                            <a type="button" className="btn btn-sm me-1 btn-outline-primary" href="https://github.com/wiefunkdai">
                              <i className="bi bi-github"></i></a>                          
                            <a type="button" className="btn btn-sm btn-outline-primary" href="https://t.me/wiefunkdai"><i className="bi bi-telegram"></i></a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}