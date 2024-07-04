import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:jewellers_hub/app_properties.dart';
import 'package:jewellers_hub/models/transaction.dart';
import 'package:jewellers_hub/screens/transactions/transaction_widget/transaction_pdf_genrator.dart';

class TransactionList extends StatefulWidget {
  final List<Transaction> transactions;
  final DateTime? startDate;
  final DateTime? endDate;

  const TransactionList({
    Key? key,
    required this.transactions,
    this.startDate,
    this.endDate,
  }) : super(key: key);

  @override
  _TransactionListState createState() => _TransactionListState();
}

class _TransactionListState extends State<TransactionList> {
  Transaction? _selectedTransaction;

  @override
  Widget build(BuildContext context) {
    List<Transaction> filteredTransactions = _filterTransactions();
    return Column(
      children: [
        _buildHeader(),
        Expanded(
          child: Stack(
            children: [
              _buildTransactionList(filteredTransactions),
              if (_selectedTransaction != null)
                _buildTransactionDetails(_selectedTransaction!),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildHeader() {
    return Container(
      color: logoBlue,
      padding: EdgeInsets.symmetric(horizontal: 16, vertical: 12),
      child: Row(
        children: [
          Text(
            'Transactions',
            style: TextStyle(
                color: Colors.white, fontWeight: FontWeight.bold, fontSize: 18),
          ),
          Spacer(),
          IconButton(
            icon: Icon(Icons.filter_list, color: Colors.white),
            onPressed: () {
              // Implement filter functionality
            },
          ),
          IconButton(
            icon: Icon(Icons.sort, color: Colors.white),
            onPressed: () {
              // Implement sort functionality
            },
          ),
        ],
      ),
    );
  }

  Widget _buildTransactionList(List<Transaction> transactions) {
    return ListView.builder(
      scrollDirection: Axis.horizontal,
      itemCount: transactions.length,
      itemBuilder: (context, index) {
        return _buildTransactionCard(transactions[index]);
      },
    );
  }

  Widget _buildTransactionCard(Transaction transaction) {
    return GestureDetector(
      onTap: () {
        setState(() {
          _selectedTransaction = transaction;
        });
      },
      child: Container(
        width: 150,
        margin: EdgeInsets.all(8),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(12),
          boxShadow: [BoxShadow(color: Colors.black12, blurRadius: 5)],
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              width: 60,
              height: 60,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: _getStatusColor(transaction.status),
              ),
              child: Center(
                child: Text(
                  transaction.id.toString(),
                  style: TextStyle(
                      color: Colors.white, fontWeight: FontWeight.bold),
                ),
              ),
            ),
            SizedBox(height: 8),
            Text(
              DateFormat('dd MMM yyyy')
                  .format(DateTime.parse(transaction.dated)),
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 4),
            Text(
              transaction.status,
              style: TextStyle(color: _getStatusColor(transaction.status)),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildTransactionDetails(Transaction transaction) {
    return AnimatedPositioned(
      duration: Duration(milliseconds: 300),
      curve: Curves.easeInOut,
      left: 0,
      right: 0,
      bottom: _selectedTransaction != null ? 0 : -300,
      child: Container(
        height: 300,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
          boxShadow: [BoxShadow(color: Colors.black26, blurRadius: 10)],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: EdgeInsets.all(16),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    'Transaction Details',
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                  ),
                  IconButton(
                    icon: Icon(Icons.close),
                    onPressed: () {
                      setState(() {
                        _selectedTransaction = null;
                      });
                    },
                  ),
                ],
              ),
            ),
            Expanded(
              child: ListView(
                padding: EdgeInsets.symmetric(horizontal: 16),
                children: [
                  _buildDetailRow(
                      'Date',
                      DateFormat('dd MMM yyyy')
                          .format(DateTime.parse(transaction.dated))),
                  _buildDetailRow('Status', transaction.status),
                  _buildDetailRow('Order ID', transaction.order_id),
                  _buildDetailRow('Payment ID', transaction.payment_id),
                  _buildDetailRow(
                      'Error Code', transaction.error_code ?? 'N/A'),
                  _buildDetailRow('Error Description',
                      transaction.error_description ?? 'N/A'),
                  _buildDetailRow('Kitty ID', transaction.kitty_id.toString()),
                  SizedBox(height: 16),
                  ElevatedButton.icon(
                    icon: Icon(Icons.download),
                    label: Text('Download Invoice'),
                    onPressed: () =>
                        TransactionPdfGenerator.generateAndOpenInvoice(
                            transaction),
                    style: ElevatedButton.styleFrom(
                      // primary: logoBlue,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8)),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildDetailRow(String label, String value) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 4),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 120,
            child: Text(
              label,
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
          ),
          Expanded(
            child: Text(value),
          ),
        ],
      ),
    );
  }

  Color _getStatusColor(String status) {
    switch (status) {
      case 'Payment Success':
        return Colors.green;
      case 'Payment Failure':
        return Colors.red;
      default:
        return Colors.orange;
    }
  }

  List<Transaction> _filterTransactions() {
    return widget.transactions.where((transaction) {
      DateTime transactionDate = DateTime.parse(transaction.dated);
      if (widget.startDate != null && widget.endDate != null) {
        return transactionDate.isAfter(widget.startDate!) &&
            transactionDate.isBefore(widget.endDate!.add(Duration(days: 1)));
      }
      return true;
    }).toList();
  }
}
