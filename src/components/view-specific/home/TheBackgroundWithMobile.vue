<template>
    <div class="background-with-mobile">
        <a href="#" class="background-with-mobile__mobile">
            <div class="background-with-mobile__img">
                <img src="https://cdn.pixabay.com/photo/2023/03/17/02/42/architecture-7857832_640.jpg" alt="">
            </div>
            <p class="background-with-mobile__text">Scout the City<br><span>56.7k followers</span></p>
            <div class="background-with-mobile__circle-img">
                <img src="https://cdn.pixabay.com/photo/2018/04/05/09/32/portrait-3292287_640.jpg" alt="">
            </div>

        </a>
    </div>
</template>


<style scoped>
.background-with-mobile {
    height: 100%;
    width: 100%;
    position: relative;
    flex-shrink: 0;
    background: url('https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600');
    background-size: cover;

    &__mobile {
        position: absolute;
        left: 5.125em;
        bottom: 5.625em;

        @media (max-width: 600px) {
            left: 5em;
            bottom: 2em;

        }
    }

    &__img {
        height: 21.5625em;
        width: 12.125em;
        border-radius: 1rem;
        overflow: hidden;
        border-top: 1px solid #000;

        & img {
            object-fit: cover;
            height: 100%;
            width: auto;
        }
    }

    &__text {
        font-weight: 600;
        margin-top: 4px;
        margin-left: 3em;
        color: #fff;
        line-height: 1.2;
        font-size: 1rem;

        & span {
            font-weight: normal;
        }
    }

    &__circle-img {
        height: 5.375em;
        width: 5.375em;
        border-radius: 50%;
        border: 2px solid #fff;
        overflow: hidden;
        position: absolute;
        top: 73%;
        left: -18%;

        & img {
            object-fit: cover;
            width: 100%;
            height: auto;
        }
    }
}
</style>