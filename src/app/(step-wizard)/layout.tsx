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
'use client';

import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import SDTextHelper from '@/helpers/SDTextHelper';
import '../jquery.smartwizard-min.css';
import '@sdailover/react-aicamsor/dist/sdailover.aicamsor.css';
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

const routeList = [
    { name: 'take', href: '/take' },
    { name: 'scan', href: '/scan' },
    { name: 'finish', href: '/finish' }
];

/**
 * SDaiLover Step Wizard layout script.
 * 
 * @author    : Stephanus Bagus Saputra,
 *              ( 戴 Dai 偉 Wie 峯 Funk )
 * @email     : wiefunk@stephanusdai.web.id
 * @contact   : https://t.me/wiefunkdai
 * @support   : https://opencollective.com/wiefunkdai
 * @link      : https://www.stephanusdai.web.id
 */
export default function StepWizardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathname = usePathname();
    return (
        <>
            <div className="sw sw-theme-arrows sw-justified">
                <Nav as="ul" className="nav-progress">
                    {routeList.map((routeItem, index) => {
                        const isActive = pathname.startsWith(routeItem.href);
                        return (
                            <Nav.Item as="li" key={routeItem.name}>
                                <Nav.Link eventKey={isActive ? routeItem.name : 'disabled'} 
                                    className={classNames(
                                    isActive ? 'active' : 'default'
                                )} disabled={!isActive}>
                                    <div className="num">{index+1}</div>
                                    {SDTextHelper.titleCase(routeItem.name)}
                                </Nav.Link>
                            </Nav.Item>
                        );         
                    })}
                </Nav>
                <div className='tab-content px-4 py-5'>
                    <div className='tabpane'>
                        { children }
                    </div>
                </div>
            </div>
        </>
    );
}