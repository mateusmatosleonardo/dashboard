import Image from "next/image"

const Users = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Nome</th>
            <th>Trabalho</th>
            <th>Idade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <Image
                      src="/amor.jpeg"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Thatiana</div>
                  <div className="text-sm opacity-50">Ceará</div>
                </div>
              </div>
            </td>
            <td>
              Autônomo
              <br />
              <span className="badge badge-ghost badge-sm">Sem descrição</span>
            </td>
            <td>21</td>
            <th>
              <button className="btn btn-ghost btn-xs">Detalhes</button>
            </th>
          </tr>

          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <Image
                      src="/eu.jpeg"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Mateus</div>
                  <div className="text-sm opacity-50">Ceará</div>
                </div>
              </div>
            </td>
            <td>
              Desenvolvedor de software
              <br />
              <span className="badge badge-ghost badge-sm">Sem descrição</span>
            </td>
            <td>23</td>
            <th>
              <button className="btn btn-ghost btn-xs">Detalhes</button>
            </th>
          </tr>
        </tbody>
        {/*
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
        */}
      </table>
    </div>
  )
}

export default Users