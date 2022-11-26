function listagem(){

    let htmls = `<div class="table-responsive-md">

        <table class="table table-striped" class="display" id="minhaTabela">

            <thead>

                <tr>
                    <th scope="col">Ação</th>
                    <th scope="col">Número</th>
                    <th scope="col">Data</th>
                    <th scope="col">Ementa</th>

                </tr>

            </thead>

            <tbody>

                <tr>

                    {% for doc in dados.lista %}

                    <td>

                        <form action="Documentos" onsubmit="return apagar() " method="POST" name="formdeleta">

                            <input type="hidden" name="iddeleta" value="{{ doc.id }}">

                            {% if dados.nivel_usuario > 7 %}

                                <button type="submit" id="deletardoc" name="deletardoc" class="btn btn-danger btn-sm"  value="apaga">Apagar</button>

                            {% else %}

                                <button type="submit" id="deletardoc" name="deletardoc" class="btn btn-danger btn-sm"  value="apaga" disabled="true">Apagar</button>

                            {% endif %}

                        </form>

                    </td>

                    <td align="center"> {{ doc.numero }} </td>

                    <td align="center"> {{ doc.data | date("d/m/Y") }} </td>

                    <td style="text-align: justify;"> {{ doc.ementa }} </td>

                    <td> </td>

                </tr>

                {% endfor %}

            </tbody>

        </table>


    </div>`;

    return htmls;

};