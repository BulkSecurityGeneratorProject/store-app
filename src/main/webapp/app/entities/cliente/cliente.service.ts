import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ICustomer } from 'app/shared/model/customer.model';
import { IRequestSearch } from 'app/shared/model/request-search';

type EntityResponseType = HttpResponse<ICustomer>;
type EntityArrayResponseType = HttpResponse<ICustomer[]>;

@Injectable({ providedIn: 'root' })
export class ClienteService {
  public resourceUrl = SERVER_API_URL + 'api/customers';
  public resourceSearchUrl = SERVER_API_URL + 'api/_search/customers';
  public resourceCustomSeachUrl = SERVER_API_URL + 'api/_customSearch/customers';

  constructor(protected http: HttpClient) {}

  create(customer: ICustomer): Observable<EntityResponseType> {
    return this.http.post<ICustomer>(this.resourceUrl, customer, { observe: 'response' });
  }

  update(customer: ICustomer): Observable<EntityResponseType> {
    return this.http.put<ICustomer>(this.resourceUrl, customer, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICustomer>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICustomer[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICustomer[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
  }

  customSearch(requestSearch: IRequestSearch): Observable<EntityArrayResponseType> {
    return this.http.post<ICustomer[]>(this.resourceCustomSeachUrl, requestSearch, { observe: 'response' });
  }
}
