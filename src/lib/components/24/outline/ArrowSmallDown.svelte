<script>
  export let color = 'currentColor'
  export let size = 24
  export let strokeWidth = 1.5
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 4.5V19.5M12 19.5L18.75 12.75M12 19.5L5.25 12.75"
    stroke={color}
    stroke-width={strokeWidth}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
