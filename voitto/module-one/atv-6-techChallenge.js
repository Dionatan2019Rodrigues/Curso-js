const nameUser = "Dionatan";
const birthDate = "30/11/2007";

function calculateAge(birthDate) {
  let diaNasc = Number(birthDate.substring(0, 2));
  let mesNasc = Number(birthDate.substring(3, 5));
  let anoNasc = Number(birthDate.substring(6, 10));
  const diaAtual = 24;
  const mesAtual = 8;
  const anoAtual = 2024;

  if (mesNasc < mesAtual || (diaNasc < diaAtual && mesNasc === mesAtual)) {
    return anoAtual - anoNasc;
  } else return anoAtual - anoNasc - 1;
}

const calculateDate = (birthDate) => {
  let dia = Number(birthDate.substring(0, 2));
  let mes = Number(birthDate.substring(3, 5));
  let ano = Number(birthDate.substring(6, 10));

  if (dia === 30 && mes === 12) {
    dia = 1;
    mes = 1;
    ano++;
  } else if (dia === 30) {
    dia = 1;
    mes++;
  } else {
    dia++;
  }

  ano += 18;

  return `${dia}/${mes}/${ano}`;
};

const main = (nameUser, birthDate) => {
  const pricePackage = 1800;
  const age = calculateAge(birthDate);

  if (age > 0) {
    if (age < 16) {
      console.log(
        `Não pode fazer matrícula antecipada ${nameUser}, portando não pode participar da promoção com apenas ${age} anos de idade.`
      );
    } else if (age < 18) {
      console.log(
        `${nameUser} você pode realizar matricula antecipada no valor de R$${
          pricePackage * 0.8
        } e iniciar as aulas a partir do dia ${calculateDate(birthDate)}`
      );
    } else if (age <= 40) {
      console.log(
        `${nameUser} você pode ter início imediato pelo valor de R$${pricePackage}`
      );
    } else {
      console.log(
        `${nameUser} você pode realizar matricula no valor de R$${
          pricePackage * 0.6
        } e ter início imediato das aulas`
      );
    }
  }
};

main(nameUser, birthDate);
