<template>
    <div class="container">
        <section class="section-buttons">
            <h1>Variant: Default</h1>
            <hr />
            <div class="layer">
                <div class="button-wrapper">
                    <span> Default </span>
                    <Button value="Button" />
                </div>

                <div class="button-wrapper">
                    <span> Disabled </span>
                    <Button value="Button" disabled />
                </div>

                <div class="button-wrapper">
                    <span>Icon Enabled</span>
                    <Button value="Button" startIcon="add_shopping_cart" />
                </div>
            </div>
            <div class="layer">
                <div class="button-wrapper">
                    <span>Default</span>
                    <Button value="Button" />
                </div>

                <div class="button-wrapper">
                    <span>Primary</span>
                    <Button value="Button" color="primary" />
                </div>

                <div class="button-wrapper">
                    <span>Secondary</span>
                    <Button value="Button" color="secondary" />
                </div>

                <div class="button-wrapper">
                    <span>Danger</span>
                    <Button value="Button" color="danger" />
                </div>
            </div>
        </section>

        <section class="section-buttons">
            <h1>Variant: Outline</h1>
            <hr />
            <div class="layer">
                <div class="button-wrapper">
                    <span> Default </span>
                    <Button value="Button" variant="outline" />
                </div>

                <div class="button-wrapper">
                    <span> Disabled </span>
                    <Button value="Button" variant="outline" disabled />
                </div>

                <div class="button-wrapper">
                    <span>Icon Enabled</span>
                    <Button
                        value="Button"
                        startIcon="add_shopping_cart"
                        variant="outline"
                    />
                </div>
            </div>
            <div class="layer">
                <div class="button-wrapper">
                    <span> Default </span>
                    <Button value="Button" variant="outline" />
                </div>

                <div class="button-wrapper">
                    <span> Primary </span>
                    <Button value="Button" variant="outline" color="primary" />
                </div>

                <div class="button-wrapper">
                    <span> Secondary </span>
                    <Button
                        value="Button"
                        variant="outline"
                        color="secondary"
                    />
                </div>

                <div class="button-wrapper">
                    <span> Danger </span>
                    <Button value="Button" variant="outline" color="danger" />
                </div>
            </div>
        </section>

        <section class="section-buttons">
            <h1>Variant: Text</h1>
            <hr />
            <div class="layer">
                <div class="button-wrapper">
                    <span> Default </span>
                    <Button value="Button" variant="text" />
                </div>

                <div class="button-wrapper">
                    <span> Disabled </span>
                    <Button value="Button" variant="text" disabled />
                </div>

                <div class="button-wrapper">
                    <span>Icon Enabled</span>
                    <Button
                        value="Button"
                        startIcon="add_shopping_cart"
                        variant="text"
                    />
                </div>
            </div>
            <div class="layer">
                <div class="button-wrapper">
                    <span> Default </span>
                    <Button value="Button" variant="text" />
                </div>

                <div class="button-wrapper">
                    <span> Primary </span>
                    <Button value="Button" variant="text" color="primary" />
                </div>

                <div class="button-wrapper">
                    <span> Secondary </span>
                    <Button value="Button" variant="text" color="secondary" />
                </div>

                <div class="button-wrapper">
                    <span> Danger </span>
                    <Button value="Button" variant="text" color="danger" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Button from "./components/Button.vue";

export default {
    name: "App",
    components: {
        Button,
    },
};
</script>

<style lang="scss">
.container {
    padding-top: 20px;
    display: flex;
    justify-content: space-around;
    
}

.section-buttons {
    box-shadow: 0px 8px 10px rgba(51, 51, 51, 0.2);
    border-radius: 10px;
    padding: 20px 15px;
    font-family: "Noto Sans JP", sans-serif;
    margin-bottom: 20px;

    h1 {
        margin-bottom: 0.5em;
    }

    .layer {
        display: flex;
    }

    .button-wrapper {
        span {
            margin-bottom: 5px;
        }

        display: flex;
        flex-direction: column;
        margin: 5px 10px;
    }
}
</style>
