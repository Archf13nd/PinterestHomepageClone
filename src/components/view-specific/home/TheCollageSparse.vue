<template>
    <nav class="collage-sparse">
        <a class="collage-sparse__img collage-sparse__img--1 collage-sparse__img--large">
            <span>{{ $t("save-ideas.image-1") }}</span>
        </a>
        <a class="collage-sparse__img collage-sparse__img--2">
            <span>{{ $t("save-ideas.image-2") }}</span>
        </a>
        <a class="collage-sparse__img collage-sparse__img--3">
            <span>{{ $t("save-ideas.image-3") }}</span>
        </a>
        <a class="collage-sparse__img collage-sparse__img--4">
            <span>{{ $t("save-ideas.image-4") }}</span>
        </a>
        <a class="collage-sparse__img collage-sparse__img--5">
            <span>{{ $t("save-ideas.image-5") }}</span>
        </a>
    </nav>
</template>

<style scoped>
.collage-sparse {
    display: grid;
    grid-template-columns: 1fr .69fr;
    grid-template-rows: 14em min-content 1fr;
    justify-content: center;
    font-size: inherit;

    &__img {
        border-radius: 20%;
        background: #000;
        display: flex;
        justify-content: center;
        /* align-items: center; */
        color: #fff;
        position: relative;
        padding: 0 7%;
        line-height: 1.4;
        font-weight: 600;



        &--1 {
            padding-top: 6em;

            & span {
                font-size: 3.5em;
            }
        }

        &--2,
        &--4,
        &--5 {
            width: 13.875em;
            height: 14em;
            padding-top: 5em;

            & span {
                font-size: 1.75em;
            }

        }

        &--2 {
            left: 3.375em;
        }

        &--3 {
            width: 10.31em;
            height: 10.75em;
            left: 2.31em;
            top: 2.875em;
            padding-top: 5em;

            & span {
                font-size: 1.25em;
            }
        }

        &--4 {
            left: 9.3125em;
            top: 2.5em;
        }

        &--5 {
            left: 1.1875em;
            top: 5em;
        }


        &--large {
            height: 26em;
            width: 25em;
            grid-row: 1 / 3;
            grid-column: 1 / 2;

        }
    }
}
</style>