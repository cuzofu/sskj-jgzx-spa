export function defaults() {
  return {
    empty: true,
    loading: false,
    workNo: '',
  };
}

export function updateState(ctx, data) {
  ctx.setState(data);

  return data;
}

export async function search(ctx, fromExec = {}, fromUpdateState) {
  let state = {};

  console.log(fromExec);
  console.log(fromUpdateState);

  const {
    setState,
    fn: { message, DB },
  } = ctx;

  setState({ loading: true });

  try {
    console.log(DB.User);
    const users = await DB.User.query(fromUpdateState);

    const empty = !users.data.length;

    if (empty) {
      message.info(`${fromExec.workNo}查无数据！`);
    }

    state = { ...users, empty };
  } catch (e) {
    message.error(`${fromExec.workNo}请求出错啦！`);
    state = { users: [], empty: false };
  }

  setState({ ...state, loading: false });
}
