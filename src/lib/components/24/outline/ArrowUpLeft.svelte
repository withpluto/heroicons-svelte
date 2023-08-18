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
    d="M19.5 19.5L4.5 4.5M4.5 4.5L4.5 15.75M4.5 4.5L15.75 4.5"
    stroke={color}
    stroke-width={strokeWidth}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
