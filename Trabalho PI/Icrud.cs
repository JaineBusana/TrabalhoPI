﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trabalho_PI
{
    internal interface Icrud
    {
        void Criar();
        void Ler();
        void Atualizar();
        void Deletar();
    }
}
