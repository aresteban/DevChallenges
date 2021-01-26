<template>
    <div class="input-container">
        <div>
            <span class="tag-example">&#60;Input &#47;&#62;</span>
            <Input id="item1" label="Label" />
        </div>
        <br>
        <div>
            <span class="tag-example">&#60;Input error &#47;&#62;</span>
            <Input id="item2" label="Label" error />
        </div>
        <br>
        <div>
            <span class="tag-example">&#60;Input disabled &#47;&#62;</span>
            <Input id="item3" label="Label" disabled />
        </div>
        <br>
        <div>
            <span class="tag-example">&#60;Input helperText="I am helping!" &#47;&#62;</span>
            <Input id="item4" label="Label" helperText="I am helping!" class="mr-2"/>
            <Input id="item5" label="Label" helperText="I am helping!" error />
        </div>
        <br>
        <div>
            <span class="tag-example">&#60;Input startIcon="add_shopping_cart" &#47;&#62; and &#60;Input endIcon="add_shopping_cart" &#47;&#62;</span>
            <Input id="item6" label="Label" startIcon="add_shopping_cart" class="mr-2"/>
            <Input id="item7" label="Label" endIcon="add_shopping_cart" />
        </div>
        <br>
        <div>
            <span class="tag-example">&#60;Input value="Test Value" &#47;&#62;</span>
            <Input id="item8" label="Label"  value="Test Value" class="mr-2"/>
        </div>

        <br>
        <div>
            <span class="tag-example">&#60;Input size &#47;&#62;</span>
            <Input id="item9" label="Label"  size="sm" class="mr-2"/>
            <Input id="item10" label="Label"  size="md" class="mr-2"/>
        </div>
        <br>
        <div>
            <span class="tag-example">&#60;Input fullWidth &#47;&#62;</span>
            <Input id="item11" label="Label"  size="sm" fullWidth/>
        </div>
        <br>
        <div>
            <span class="tag-example">&#60;Input rows="6" &#47;&#62;</span>
            <Input id="item11" label="Label"  rows="6"/>
        </div>
    </div>
    <footer>
        Created by 
        <a href="https://github.com/aresteban"> Aldrin Esteban </a>
    </footer>
</template>

<script>
import Input from './components/Input.vue'

export default {
    name: "App",
    components: { Input },
};
</script>

<style lang="scss">
* { font-family: 'Noto Sans JP', sans-serif; }

.input-container {
    padding: 20px 30px;
}

.tag-example {
    display: block;
    font-size: 12px;
    margin-bottom: 8px;
}

.mr-2 {
    margin-right: 6px;
}

footer {
    background: #042438;
    color: #fff;
    padding: 10px 20px;
    // position: fixed;
    // width: 100vw;
    // bottom: 0;

    box-sizing: border-box;  

    text-align: right;

    a {
        color: #ffa221;
        text-decoration: none;
    }

}
</style>
