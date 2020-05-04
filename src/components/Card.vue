<template>
<a href="">
    <div class="contentContainer Active" id="content1">
        <div class="labelContainer" id="label1">
            <p class="label3" id="label13">
                View work —
            </p>
            <div class="titleContainer">
                <p class="label1" id="label11">
                    Project
                </p>
            </div>
        </div>
        <div class="imageContainer">
            <div class="image1" id="image1">
            </div>
        </div>
    </div>
</a>
</template>

<script>
export default {
 
}
</script>

<style>

#image1{
    background-color: rgb(150, 150, 173)
}

.contentContainer {
    height: auto;
    margin-top: 100px;
    margin-right: 100px;
    margin-left: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    transition: 0.5s ease;
    opacity: 1;
}

.Active {
    transition: 0.5s ease;
    opacity: 1;
}

.imageContainer {
    display: flex;
    align-items: center;
    width: 75%;
    height: 300px;
    overflow: hidden;
    transition: 0.5s ease;
    border-radius: 15px;
    transform: scale(1,1);
}
.imageContainerHover {
    transform: scale(1.01,1.01);
     transition: 0.5s ease;
}

.image1 {
    width: 100%;
    height: 302px;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    transition: 0.5s ease;
    -ms-transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    cursor: pointer;
    -webkit-backface-visibility: hidden;
}

.image1Hover {
    -ms-transform: scale(1.05, 1.05);
    -webkit-transform: scale(1.05, 1.05);
    -moz-transform: scale(1.05, 1.05);    
}

.labelContainer {
    height: 200px;
    width: 256px;
    display: flex;
    align-items: center;
    transition: 0.5s ease;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    -webkit-transform-style: preserve-3d;
    flex-wrap: wrap;
    align-content: center;
}

.label1 {
    color: #384088;
    font-size: 18px;
    -ms-transform: translate(0px, -12px) skewY(0deg);
    -webkit-transform: translate(0px, -12px) skewY(0deg);
    -moz-transform: translate(0px, -12px) skewY(0deg);
    -webkit-transform-style: preserve-3d;
    opacity: 1;
    transition: 0.5s ease;
}

.label1hover {
    -ms-transform: translate(0px, 20px) skewY(5deg);
    -webkit-transform: translate(0px, 20px) skewY(5deg);
    -moz-transform: translate(0px, 20px) skewY(5deg);
    opacity: 0;
    cursor: pointer;
}

.titleContainer {
    width: 100%;
    display: inline-block;
}

.label3 {
    color: #a5a5a5;
    font-size: 18px;
    opacity: 0;
    -webkit-transform: translate(0px, -10px) skewY(5deg);
    transition: 0.5s ease;
    cursor: pointer;
}

.label3hover {
    opacity: 1;
    -webkit-transform: translate(0px, 12px) skewY(0deg);
        text-decoration: none;
}

a:link {
    text-decoration: none;
}

@media only screen and (max-width: 830px) {
    .imageContainer {
        order: 1;
        width: 100%;
    }
    .labelContainer {
        height: auto;
        padding-top: 20px;
        order: 2;
        width: 100%;
    }
    .contentContainer {
        flex-wrap: wrap;
        margin-left: 40px;
        margin-right: 40px;
        margin-top: 0;
    }
}

@media only screen and (max-width: 375px) {
    .contentContainer {
        margin-left: 20px;
        margin-right: 20px;
    }
}
</style>