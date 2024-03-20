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
import React from "react";
import { redirect } from 'next/navigation';
import { Card, Table, Button, Image } from 'react-bootstrap';
import { SDLoadingDialog } from '@sdailover/react-aicamsor';
import SDTextHelper from '@/helpers/SDTextHelper';
import SDaiLover from "@/app/sdailover.js";

/**
 * SDaiLover Finish page script.
 * 
 * @author    : Stephanus Bagus Saputra,
 *              ( 戴 Dai 偉 Wie 峯 Funk )
 * @email     : wiefunk@stephanusdai.web.id
 * @contact   : https://t.me/wiefunkdai
 * @support   : https://opencollective.com/wiefunkdai
 * @link      : https://www.stephanusdai.web.id
 */
export default function Finish() {
    const imagePhoto = React.createRef();
    const SDAICamsor = SDaiLover.AICamsor();
    const [photoImage, setPhotoImage] = React.useState(null);
    const [personAge, setPersonAge] = React.useState(0);
    const [personGender, setPersonGender] = React.useState(null);
    const [isCameraLoading, setCameraLoading] = React.useState(true);

    const onPrevPage = () => {
        const prevLink = '/scan';
        if (typeof window !== "undefined") {
            window.open(prevLink, '_self');
        } else {
            redirect(prevLink);
        }
    }

    const onHomePage = () => {
        const homeLink = '/';
        if (typeof window !== "undefined") {
            window.open(homeLink, '_self');
        } else {
            redirect(homeLink);
        }
    }

    const onLoadPhoto = () => {
        SDAICamsor.generateDescriptionPhoto(imagePhoto.current)
            .then((imageDesciptions: any) => {
                setPersonAge(Math.round(imageDesciptions.age));
                setPersonGender(SDTextHelper.titleCase(imageDesciptions.gender));
                setCameraLoading(false);
            });
    }

    React.useEffect(() => {
        const photoAccurated = SDAICamsor.getAccuratePhoto();
        if (photoAccurated == null) {
            onPrevPage();
        } else {
            setPhotoImage(photoAccurated.photo);
        }
    });

    return (
        <>
            <Card>
                <Card.Header>Result Accuration Photo</Card.Header>
                <Card.Body>
                    <div className="scanface-result sd-overlay-wrap">
                        <Image ref={imagePhoto} onLoad={onLoadPhoto} src={photoImage} className="w-100" rounded />
                        <Table className="col-12 mt-3 table-description" striped="columns" bordered responsive>
                            <caption>Detail Person :</caption>
                            <tbody>
                                <tr>
                                    <td className="col-4">Age</td>
                                    <td className="col-8">{personAge??'unknown'}</td>
                                </tr>
                                <tr>
                                    <td className="col-4">Gender</td>
                                    <td className="col-8">{personGender??'unknown'}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <hr />
                        <Button variant="outline-primary" size="lg" className="d-block text-center mx-auto mb-3" onClick={onPrevPage}>
                            Repeat Scan
                        </Button>
                        <Button variant="primary" size="lg" className="d-block text-center mx-auto mb-3" onClick={onHomePage}>
                            <i className="bi bi-house-fill"></i> Go To Home
                        </Button>
                        <SDLoadingDialog visible={isCameraLoading} />
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}