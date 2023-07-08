<template>
    <footer class="footer">
        <nav class="nav">
            <ul class="footer__links">
                <li class="footer__link--desktop">
                    <a class="footer__link " href="#">Terms of Service</a>
                </li>
                <li class="footer__link--desktop">
                    <a class="footer__link " href="#">Privacy Policy</a>
                </li>
                <li class="footer__link--desktop">
                    <a class="footer__link " href="#">Help</a>
                </li>
                <li class="footer__link--desktop">
                    <a class="footer__link x" href="#">Iphone App</a>
                </li>
                <li class="footer__link--desktop">
                    <a class="footer__link " href="#">Android App</a>
                </li>
                <li class="">
                    <a class="footer__link" href="#">Users</a>
                </li>
                <li class="">
                    <a class="footer__link" href="#">Collections</a>
                </li>
                <li class="">
                    <a class="footer__link" href="#">Today</a>
                </li>
                <li class="">
                    <a class="footer__link" href="#">Explore</a>
                </li>
                <li class="">
                    <a class="footer__link" href="#">Watch</a>
                </li>
                <li class="">
                    <a class="footer__link" href="#">Shop</a>
                </li>
            </ul>
        </nav>
    </footer>
</template>


<style scoped>
.footer {
    height: 3rem;
    width: 100%;
    font-size: .75rem;


    & nav {
        height: 100%;
        display: flex;
        justify-content: center;
    }

    &__links {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        & li {
            &:not(:last-child) {
                margin-right: 1rem;
            }
        }
    }

    &__link {
        color: var(--c-black);
        font-weight: 600;
        color: inherit;
    }
}

@media (max-width: 55em) {
    .footer {


        &__links {
            & li {
                &:not(:last-child) {
                    margin-right: .5rem;
                }
            }
        }

        &__link {
            &--desktop {
                display: none;
            }
        }
    }
}
</style>