import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import {portlandOrange} from "../../utils";

const Loader = () =>
    <div className='full-page-loader'>
        <ClipLoader
            sizeUnit={"px"}
            size={150}
            color={`${portlandOrange[100]}`}
            loading={true}
        />
    </div>;

export default Loader
