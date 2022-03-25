import React from 'react';
import 'bulma/css/bulma.min.css';
import './Test.css';
import { Heading } from 'react-bulma-components';
import mathDept from './img/math_dept.svg';
import csDept from './img/cs_dept.svg';



function Test() {
    return (
        <div class="columns">
            <div class="column is-half" id="col-left">
                <figure class="image is-square" id="math_img">
                    <img src={mathDept}></img>
                </figure>
                {/* Left column */}
            </div>
            <div class="column is-half" id="col-right">
                <figure class="image is-square" id="cs_img">
                    <img src={csDept}></img>
                </figure>
                {/* Right column */}
            </div>
        </div>

    );
}

export default Test;
