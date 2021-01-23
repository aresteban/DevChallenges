<template>
  <br>
  <br>
  <Button value="Button" disabled/> <span> -- </span>
  <Button value="Button" color="primary"/> <span> -- </span>
  <Button value="Button" color="secondary"/><span> -- </span>
  <Button value="Button" color="danger" class="potato" data-test="s" disableShadow/>
  <br>
  <br>
  <Button value="Button" variant="outline"/>

  <br>
  <br>
  <Button value="Button" variant="text" endIcon="alarm"/>

  <button disabled> Test </button>
</template>

<script>
import Button from './components/Button.vue'

export default {
  name: 'App',
  components: {
    Button
  }
}
</script>

<style>
.potato {
  color: white;
  background: burlywood !important;
}
</style>
