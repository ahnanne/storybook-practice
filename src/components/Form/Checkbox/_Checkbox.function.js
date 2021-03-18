export default function Checkbox({ id, label, checked, onChecked }) {
// 함수형 comp는 this를 가지지 않음. (cf. 클래스 comp)
  return (
    <>
      <input
        type="checkbox"
        name={id}
        id={id}
        checked={checked}
        onChange={onChecked}
      />
      <label htmlFor={id}>{label}</label>
    </>
  )
}