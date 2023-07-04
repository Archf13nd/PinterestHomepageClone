<template>
    <footer class="footer">
        <nav class="nav">
            <ul class="footer__links">
                <li class="">
                    <a class="footer__link footer__link--desktop" href="#">Terms of Service</a>
                </li>
                <li class="">
                    <a class="footer__link footer__link--desktop" href="#">Privacy Policy</a>
                </li>
                <li class="">
                    <a class="footer__link footer__link--desktop" href="#">Help</a>
                </li>
                <li class="">
                    <a class="footer__link footer__link--desktop" href="#">Iphone App</a>
                </li>
                <li class="">
                    <a class="footer__link footer__link--desktop" href="#">Android App</a>
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
    background: var(--c-white);

    & nav {
        height: 100%;
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