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
    d="M19.5 4.5L4.5 19.5M4.5 19.5L15.75 19.5M4.5 19.5L4.5 8.25"
    stroke={color}
    stroke-width={strokeWidth}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
